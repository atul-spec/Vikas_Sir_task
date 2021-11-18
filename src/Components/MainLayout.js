import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, Touchable
} from 'react-native';

import TabButton from './TabButton';



const MainLayout = ({ drawerAnimationStyle, setSelectedTab, selectedTab, navigation }) => {



    return (
        < View style={{ flex: 1, justifyContent: 'flex-end' }}>


            <View style={{ backgroundColor: 'red' }}>

            </View>



            {/* Bottom tab */}

            <View style={{
                height: 100, backgroundColor: 'gray', borderTopLeftRadius: 35, borderTopRightRadius: 35, flexDirection: 'row', alignItems: 'center'
            }}>
                <TabButton
                    label='Home'
                />
                <TabButton
                    label='Map'
                />
                <TabButton
                    label='List'
                />
                <TabButton
                    label='Account'
                />
            </View>

        </View>
    )
};


export default MainLayout;