import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import CoreLayout from './CoreLayout'
import io from 'socket.io-client'
import { pluralise } from '../utils/helper'

class PulseDebugger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      connections: 0,
      events: [],
      socket: null,
    }
    // this.listenIO = this.listenIO.bind(this)
  }

  componentDidMount () {
    const socket = io('https://pulse-server-km.herokuapp.com')
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

  // listenIO () {
  //   const socket = io('https://pulse-server-km.herokuapp.com')
  //   socket.on('connectionCount', (connectionCount) => {
  //     this.setState({ connections: connectionCount })
  //   })
  //   socket.on('event', (data) => {
  //     this.setState(state => ({
  //       events: [data, ...state.events],
  //       connections: data.connectionCount,
  //     }))
  //   })
  // }

  _renderItem = ({ item }) => {
    const d = new Date(item.timestamp)
    const date = d.toLocaleTimeString()
    return (
      <View style={styles.listItem}>
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

  render () {
    const { navigation } = this.props
    const { connections, events } = this.state
    return (
      <CoreLayout title='Pulse' toggleMenu={() => navigation.navigate('DrawerToggle')}>
        <View style={styles.connectionsContainer}>
          <Text style={styles.connectionText}>{connections} {pluralise('connection', connections)}</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            data={events}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._itemSeparatorComponent}
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
  connectionText: {
    fontSize: 12, 
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
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

export default PulseDebugger
