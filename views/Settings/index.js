import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import { ORANGE } from '../../utils/colors'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from './Menu'
import Storage from './Storage'
import Notifications from './Notifications/index'

const SettingsStack = createStackNavigator()

const Settings = ({ navigation }) => {
    
    return (
        <>
        <SettingsStack.Navigator initialRouteName='Menu'>
            <SettingsStack.Screen name='Menu' component={Menu} />
            <SettingsStack.Screen name='Storage' component={Storage} />
            <SettingsStack.Screen name='Notifications' component={Notifications} />
        </SettingsStack.Navigator>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const MenuItem = styled.View`
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export default Settings