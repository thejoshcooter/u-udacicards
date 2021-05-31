import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import { ORANGE } from '../../utils/colors'

const Menu = ({ navigation }) => {
    
    return (
        <>
        <Container>
            <MenuItem onPress={() => navigation.navigate('Storage')}><Text>Storage</Text></MenuItem>
            <MenuItem onPress={() => navigation.navigate('Notifications')}><Text>Notifications</Text></MenuItem>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const MenuItem = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export default Menu