import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import CoreLayout from './CoreLayout'

const Options = ({ navigation }) => {
  return (
    <CoreLayout title='Options' toggleMenu={() => navigation.navigate('DrawerToggle')}>
      <Text>Options screen</Text>
    </CoreLayout>
  )
}

export default Options
