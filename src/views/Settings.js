import React from "react";
import { View, Text} from "react-native";
import style from "../style";
import TopNav from "../components/containers/TopNav";

const Settings = () => {
    return (
        <View>
            <TopNav />
            <Text>Settings</Text>
        </View>
    );
};

export default Settings;