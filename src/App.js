/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import style from "./style";
import TopNav from "./components/containers/TopNav";

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <TopNav/>
        <View style={style.Main}>

        </View>
      </SafeAreaView>
    </View>
  );
};


export default App;
