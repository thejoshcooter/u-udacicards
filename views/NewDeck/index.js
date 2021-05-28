import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'

const NewDeck = () => {
    return (
        <>
        <Container>
            <TitleInput 
                name='title'
                placeholder='title'
            />

            <SubmitButton><Text>Submit</Text></SubmitButton>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const TitleInput = styled.TextInput`
    width: 80%;
    height: 40px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 3px;
`

const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`

export default NewDeck