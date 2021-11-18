import React from "react";
import {
    StyleSheet, Text, TextInput, View, Image
    , TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "./context";



const Account = ({ navigation }) => {

    const { signOut } = React.useContext(AuthContext);

    
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/birthday.png')}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => { signOut() }}
            >
                <Text style={{ fontSize: 25 }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 15,
        width: '70%',
        alignSelf: "center",
        borderRadius: 30
    },
    tinyLogo: {
        width: 150,
        height: 150,
    }
});

export default Account;