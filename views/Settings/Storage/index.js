import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import { ORANGE } from '../../utils/colors'
import * as API from '../../../data/_data'

const Storage = ({ navigation }) => {

    const alertSuccess = () => {
        Alert.alert(
            'Success!',
            'App storage has been successfully cleared.',
            [
                {
                    text: 'Return to Dashboard',
                    onPress: () => {
                        navigation.navigate('Decks', { refresh: true })
                    }
                }
            ]
        )
    }
    
    const handleReset = () => {
        Alert.alert(
            'Warning!',
            'Are you sure you want to clear all app storage?',
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        API.clearStorage()
                        API.initStorage()
                        alertSuccess()
                    }
                }
            ]
            )
    }
    
    return (
        <>
        <Container>
            <MenuItem onPress={() => handleReset()}><Text>Clear Storage</Text></MenuItem>
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

export default Storage