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

import {darkGreen, lightGreen, lightGray} from "./style"

import style from "./style";
import TopNav from "./components/containers/TopNav";
import Home from "./views/Home"
import AdvancedReport from "./views/AvancedReport";
import Map from "./views/Map";
import Statistics from "./views/Statistics";
import Knowledge from "./views/Knowledge";
import DrawerCustom from "./components/containers/DrawerCustom";


const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer theme={MyTheme}>

            <View style={style.Main}>
                <Drawer.Navigator initialRouteName="Home" drawerContent={ props => <DrawerCustom {...props}/> }>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="AdvancedReport" component={AdvancedReport} />
                    <Drawer.Screen name="Map" component={Map} />
                    <Drawer.Screen name="Statistics" component={Statistics} />
                    <Drawer.Screen name="Knowledge" component={Knowledge} />
                </Drawer.Navigator>
            </View>
          </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

const MyTheme = {
    dark: false,
    colors: {
        primary: lightGray,
        background: lightGray,
        card: darkGreen,
        text: lightGray,
        notification: '#ffffff',
    },
};

const styles = StyleSheet.create({
    MenuItem:{
        fontSize: 30,
    }
})


export default App;
