import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
// import PropTypes from 'prop-types'

class CoreLayout extends Component {
  render () {
    const { title, toggleMenu } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={toggleMenu}
            >
              <FontAwesome name='bars' size={20} color='black' />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleItem}>{title}</Text>
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
    backgroundColor: '#f5f5f5',
    marginTop: 22,
    padding: 14,
  },
  menu: {
    height: '100%',
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

// CoreLayout.propTypes = {
//   navigation: PropTypes.func.isRequired,

// }

export default CoreLayout
