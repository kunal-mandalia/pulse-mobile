import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

class CoreLayout extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => {console.log('menu clicked') }}
            >
              <FontAwesome name='bars' size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleItem}>Navbar</Text>
          </View>
        </View>
        <View style={styles.node}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 25,
    padding: 12,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  title: {
    alignSelf: 'center',
  },
  titleItem: {
    fontSize: 24,
  },
  node: {
    flex: 1,
    backgroundColor: 'blue',
  }
})

export default CoreLayout
