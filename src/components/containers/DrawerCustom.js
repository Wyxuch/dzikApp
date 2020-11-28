import React from 'react'
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import {Drawer, Text} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialIcons'

const DrawerCustom = (props) => {
 return (
     <View style={{flex:1}}>
         <DrawerContentScrollView {...props}>

             <DrawerItem
                 icon = {({color, size}) => {return <Icon name="home" color={color} size={size}/>}}
                 label="Home"
                 onPress={() => {props.navigation.navigate('Home')}}
             />
             <DrawerItem
                 icon = {({color, size}) => {return <Icon name="announcement" color={color} size={size}/>}}
                 label="Advanced report"
                 onPress={() => {props.navigation.navigate('AdvancedReport')}}
             />
             <DrawerItem
                 icon = {({color, size}) => {return <Icon name="map" color={color} size={size}/>}}
                 label="Map"
                 onPress={() => {props.navigation.navigate('Map')}}
             />
             <DrawerItem
                 icon = {({color, size}) => {return <Icon name="poll" color={color} size={size}/>}}
                 label="Stats"
                 onPress={() => {props.navigation.navigate('Statistics')}}
             />
             <DrawerItem
                 icon = {({color, size}) => {return <Icon name="info" color={color} size={size}/>}}
                 label="Knowledge"
                 onPress={() => {props.navigation.navigate('Knowledge')}}
             />
         </DrawerContentScrollView>
     </View>
 )
}

export default DrawerCustom;