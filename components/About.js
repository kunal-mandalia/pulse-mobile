import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native'
import CoreLayout from './CoreLayout'

export const websiteUrl = 'https://pulse-web-km.herokuapp.com/'
export const projectUrl = 'https://github.com/kunal-mandalia/pulse-mobile.git'

const About = ({ navigation }) => {
  return (
    <CoreLayout title='About' toggleMenu={() => navigation.navigate('DrawerToggle')}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text className='why' style={styles.header}>Why this project?</Text>
        <Text style={styles.paragraph}>
          Segment.com's real time event debugger, which lets you see the actions users are taking on your website in real time, is pretty cool. I wanted to build something similar using socket.io.
           Checkout the <Text style={styles.link} onPress={() => { Linking.openURL(projectUrl)}}>pulse project</Text> on Github
        </Text>

        <Text className='how' style={styles.header}>How it works</Text>
        <Text style={styles.paragraph}>
          Send events to the debugger by clicking around the demo <Text style={styles.link} onPress={() => { Linking.openURL(websiteUrl)}}>public facing site </Text> 
           (navbar, buttons, etc.). Events will appear in realtime in the debugger.
        </Text>
      </ScrollView>
    </CoreLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    marginHorizontal: 20,
  },
  link: {
    color: 'blue',
  }
})

export default About
