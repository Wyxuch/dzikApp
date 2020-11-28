import React from "react";
import { View, Text} from "react-native";
import style from "../style";
import TopNav from "../components/containers/TopNav";

const MyAccount = () => {
    return (
        <View>
            <TopNav />
            <Text>MyAccount</Text>
        </View>
    );
};

export default MyAccount;