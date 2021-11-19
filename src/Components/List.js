import React from "react";
import { Text, View, } from "react-native";



const List = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eaeaea",
        }}>
            <Text style={{fontSize:35,fontWeight:"bold"}}>List</Text>
        </View>
    )
};


export default List;