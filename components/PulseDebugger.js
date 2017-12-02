import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import CoreLayout from './CoreLayout'
import io from 'socket.io-client'
import { pluralise } from '../utils/helper'
import PropTypes from 'prop-types'

class PulseDebugger extends Component {
  constructor (props = {}) {
    super(props)
    const { connections, events, socket, socketLib } = props
    this.state = {
      connections: connections || 0,
      events: events || [],
      socket: socket || null,
      socketLib: socketLib || io
    }
  }

  componentDidMount () {
    const { socketLib } = this.state
    const socket = socketLib('https://pulse-server-km.herokuapp.com')
    this.setState({ socket })
    
    socket.on('connectionCount', (connectionCount) => {
      this.setState({ connections: connectionCount })
    })
    socket.on('event', (data) => {
      this.setState(state => ({
        events: [data, ...state.events],
        connections: data.connectionCount,
      }))
    })
  }

  _renderItem = ({ item }) => {
    const d = new Date(item.timestamp)
    const date = d.toLocaleTimeString()
    return (
      <View className='render-item' style={styles.listItem}>
        <View style={styles.row}>
          <Text style={styles.listItemType}>{item.type.toUpperCase()}</Text>
          <Text style={styles.listItemValue}>{item.value}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.listItemDate}>{date}</Text>
        </View>
      </View>
    )
  }

  _keyExtractor = item => item.timestamp

  _itemSeparatorComponent = () => <View style={styles.separator} />

  _listEmptyComponent = () => (
    <View id='empty-list' className='empty-list' style={styles.listEmptyContainer}>
      <ActivityIndicator />
      <Text style={styles.note}>Listening for events</Text>
    </View>
  )

  render () {
    const { navigation } = this.props
    const { connections, events } = this.state
    const hasEvents = events.length > 0
    return (
      <CoreLayout title='Pulse' toggleMenu={() => navigation.navigate('DrawerToggle')}>
        <View style={styles.connectionsContainer}>
          <Text style={styles.connectionText}>{connections} {pluralise('connection', connections)}</Text>
        </View>
        <View style={[styles.listContainer, {alignItems: hasEvents ? 'flex-start' : 'center'}]}>
          <FlatList
            id='event-list'
            style={styles.list}
            data={events}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._itemSeparatorComponent}
            ListEmptyComponent={this._listEmptyComponent}
            />
        </View>
      </CoreLayout>
    )
  }

  componentWillUnmount () {
    const { socket } = this.state
    socket.close()
  }
}

const styles = StyleSheet.create({
  connectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  note: {
    margin: 10,
    color: 'grey',
  },
  connectionText: {
    fontSize: 12, 
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
  },
  list: {
    flex: 1,
  },
  listItem: {
    flex: 1,
    padding: 15,
    borderLeftWidth: 3,
    borderColor: '#37d699',
  },
  listItemType: {
    flex: 1,
    minWidth: 60,
  },
  listItemValue: {
    flex: 1,
  },
  listItemDate: {
    fontSize: 10,
    color: 'grey',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
  }
})

PulseDebugger.propTypes = {
  navigation: PropTypes.object.isRequired,
  socketLib: PropTypes.func,
}

export default PulseDebugger
