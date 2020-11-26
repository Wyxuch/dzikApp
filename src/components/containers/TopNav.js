import React from "react";
import { View, Text } from "react-native";
import style from "../../style";

const TopNav = () => {
    return (
        <View style={{height: 60, ...style.Shadow}}>
            <View style={style.TopNav}>
                <Text style={style.NavTitle}>DZIK!</Text>
            </View>
        </View>
    );
};

export default TopNav;