import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import * as API from '../../data/_data'
import { ORANGE } from '../../utils/colors'

const Settings = ({ navigation }) => {
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
            <ResetButton onPress={() => handleReset()}><StyledText>Clear Storage</StyledText></ResetButton>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ResetButton = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    border-radius: 3px;
    background-color: ${ORANGE};
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: #fff;
`

export default Settings