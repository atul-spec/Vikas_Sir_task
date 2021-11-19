import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';



const TabButton = ({ label, click, mycolor }) => {

    return (
        <View style={{ backgroundColor: mycolor, height: 50, borderRadius: 25, justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={click}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: mycolor == "gray" ? "#FFFFFF": "blue" , padding: 15 }}>{label}</Text>
            </TouchableOpacity>
        </View>



    )
}


export default TabButton;