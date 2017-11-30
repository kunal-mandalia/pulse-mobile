import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CoreLayout from './components/CoreLayout'
import PulseDebugger from './components/PulseDebugger'
import About from './components/About'

export const RootDrawer = DrawerNavigator({
  'Pulse debugger': {
    screen: PulseDebugger,
  },
  'About': {
    screen: About,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <RootDrawer />
    );
  }
}
