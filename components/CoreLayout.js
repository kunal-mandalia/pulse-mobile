import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

class CoreLayout extends Component {
  render () {
    const { title, toggleMenu } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.menu}>
            <TouchableOpacity
              className='toggle-menu'
              onPress={toggleMenu}
            >
              <Ionicons name='ios-pulse-outline' size={24} color='black' />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text className='title' style={styles.titleItem}>{title}</Text>
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
    marginTop: 22,
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
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
    fontSize: 20,
  },
  node: {
    flex: 1,
    backgroundColor: 'white',
  }
})

CoreLayout.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default CoreLayout
