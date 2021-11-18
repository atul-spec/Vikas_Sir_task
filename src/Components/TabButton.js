import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';




const TabButton = ({ label }) => {
    return (
        <View style={{ flex: 1, width: 50 ,height:50,justifyContent:'center',marginHorizontal:10}}>
            <TouchableOpacity>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>{label}</Text>
            </TouchableOpacity>
        </View>

    )
}


export default TabButton;