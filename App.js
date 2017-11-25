import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import CoreLayout from './components/CoreLayout'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('DrawerToggle')}
      title="Open Drawer"
    ><Text>Press me!</Text>
    </TouchableOpacity>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
});



export default class App extends React.Component {
  render() {
    return (
        <CoreLayout>
          <RootDrawer />
        </CoreLayout>
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
