import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, Touchable
} from 'react-native';
import TabButton from './TabButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Map from './Map';
import Account from './Account';
import List from './List';




const MainLayout = ({ drawerAnimationStyle, setSelectedTab, selectedTab, navigation }) => {

    const [component, setcomponet] = useState(<Home />)


    const [homeColor1, setHomeColor1] = useState('#FFFFFF')
    const [homeColor2, setHomeColor2] = useState('#FFFFFF')
    const [homeColor3, setHomeColor3] = useState('#FFFFFF')
    const [homeColor4, setHomeColor4] = useState('#FFFFFF')





    return (
        < View style={{ flex: 1, justifyContent: 'flex-end' }}>
            {component}
            {/* Bottom tab */}
            <View style={{
                height: 100, flexDirection: 'row', marginHorizontal: 20, justifyContent:'space-around'
            }}>
                <TabButton
                    label='Home'
                click={() => {setcomponet(<Home />) ,setHomeColor1('gray'),setHomeColor2('#FFFFFF'),setHomeColor3('#FFFFFF'),setHomeColor4('#FFFFFF')} }
                    isFocuced={true}
                    mycolor={homeColor1}

                />
                <TabButton
                    label='Map'
                    click={() => {setcomponet(<Map />) ,setHomeColor2('gray'),setHomeColor3('#FFFFFF'),setHomeColor1('#FFFFFF'),setHomeColor4('#FFFFFF')}}
                    isFocuced={false}
                    mycolor={homeColor2}

                />
                <TabButton
                    label='List'
                    click={() => {setcomponet(<List />) ,setHomeColor3('gray'),setHomeColor4('#FFFFFF'),setHomeColor2('#FFFFFF'),setHomeColor1('#FFFFFF')}}
                    isFocuced={false}
                    mycolor={homeColor3}

                />
                <TabButton
                    label='Account'
                    click={() => {setcomponet(<Account />) ,setHomeColor4('gray'),setHomeColor3('#FFFFFF'),setHomeColor2('#FFFFFF'),setHomeColor1('#FFFFFF')}}
                    isFocuced={false}
                    mycolor={homeColor4}

                />
            </View>

        </View>
    )
};


export default MainLayout;