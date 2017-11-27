import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import CoreLayout from './CoreLayout'
import { upperCase } from 'change-case';

class PulseDebugger extends Component {
  constructor (props) {
    super(props)
  }

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

  _keyExtractor = item => item.value

  _itemSeparatorComponent = () => <View style={styles.separator} />

  render () {
    const { navigation } = this.props
    const events = [
      { type: 'page', value: '/', timestamp: Date.now() },
      { type: 'event', value: 'Button Clicked', timestamp: Date.now() },
      { type: 'page', value: '/about', timestamp: Date.now() },
    ]
    return (
      <CoreLayout title='Pulse' toggleMenu={() => navigation.navigate('DrawerToggle')}>
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
}

const styles = StyleSheet.create({
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
