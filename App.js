import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import Feed from './src/pages/Feed';
import Article from './src/pages/Article';
import Map from './src/pages/Map';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName='Map'>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
