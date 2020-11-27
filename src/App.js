/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import style from "./style";
import TopNav from "./components/containers/TopNav";
import Home from "./views/Home"
import AdvancedReport from "./views/AvancedReport";

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <View style={style.Main}>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="AdvancedReport" component={AdvancedReport} />
                </Drawer.Navigator>
            </View>
          </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};


export default App;
