import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CoreLayout from './components/CoreLayout'

const PulseDebugerScreen = ({ navigation }) => (
  <CoreLayout title='Pulse debugger' toggleMenu={() => navigation.navigate('DrawerToggle')}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DrawerToggle')}
        title="Open Drawer"
      ><Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  </CoreLayout>
);

const OptionsScreen = ({ navigation }) => (
  <CoreLayout title='Options' toggleMenu={() => navigation.navigate('DrawerToggle')}>  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  </CoreLayout>
);

const RootDrawer = DrawerNavigator({
  'Pulse debugger': {
    screen: PulseDebugerScreen,
  },
  'Options': {
    screen: OptionsScreen,
  },
});



export default class App extends React.Component {
  render() {
    return (
      <RootDrawer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
