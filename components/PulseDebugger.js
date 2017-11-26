import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import CoreLayout from './CoreLayout'

class PulseDebugger extends Component {
  constructor (props) {
    super(props)
  }

  _renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <Text>{JSON.stringify(item.type)}</Text>
    </View>
  )

  _keyExtractor = item => item.value

  render () {
    const { navigation } = this.props
    const events = [
      { type: 'page', value: '/', timestamp: Date.now() },
      { type: 'event', value: 'Button Click', timestamp: Date.now() },
      { type: 'page', value: '/about', timestamp: Date.now() },
    ]
    return (
      <CoreLayout title='Pulse debugger' toggleMenu={() => navigation.navigate('DrawerToggle')}>
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('DrawerToggle')}
            title='Open Drawer'
          ><Text>Press me!</Text>
          </TouchableOpacity>

          <FlatList
            data={events}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            />

        </View>
      </CoreLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {

  }
})

export default PulseDebugger
