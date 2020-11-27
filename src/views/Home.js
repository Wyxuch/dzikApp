import React from "react";
import { View, Text} from "react-native";
import style from "../style";
import TopNav from "../components/containers/TopNav";

const Home = () => {
    return (
        <View>
            <TopNav />
            <Text>Home</Text>
        </View>
    );
};

export default Home;