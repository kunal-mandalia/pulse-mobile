import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CoreLayout from './components/CoreLayout'
import PulseDebugger from './components/PulseDebugger'
import Options from './components/Options'

const RootDrawer = DrawerNavigator({
  'Pulse debugger': {
    screen: PulseDebugger,
    // todo: pass events as props
  },
  'Options': {
    screen: Options,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <RootDrawer />
    );
  }
}
