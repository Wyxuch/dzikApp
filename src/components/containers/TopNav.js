import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import style from "../../style";

const TopNav = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{height: 60, ...style.Shadow}}>
            <View style={style.TopNav}>
                <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                    <Image style={style.Logo} source={require('../../assets/images/menu.png')}/>
                </TouchableOpacity>
                <View style={style.LogoWrapper}>
                    <Text style={style.NavTitle}>DZIK!</Text>
                    <Image style={style.Logo} source={require('../../assets/images/logo.png')}/>
                </View>
                <View></View>
            </View>
        </View>
    );
};

export default TopNav;