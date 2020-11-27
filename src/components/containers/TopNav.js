import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "../../style";

const TopNav = () => {
    return (
        <View style={{height: 60, ...style.Shadow}}>
            <View style={style.TopNav}>
                <View></View>
                <View style={style.LogoWrapper}>
                    <Text style={style.NavTitle}>DZIK!</Text>
                    <Image style={style.Logo} source={require('../../assets/images/logo.png')}/>
                </View>
                <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
                    <Image style={style.Logo} source={require('../../assets/images/menu.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TopNav;