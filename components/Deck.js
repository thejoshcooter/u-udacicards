import * as React from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity } from 'react-native'

const Deck = ({ id, title, questions, navigation }) => {
    return (
        <>
        <Container onPress={() => navigation.navigate('Individual Deck', { deckId: id })}>
            <Text>{title}</Text>
        </Container>
        </>
    )
}

const Container = styled.TouchableOpacity`
    background-color: orange;
    width: 80%;
    height: 20%;
    margin: 10px auto;
    border-radius: 3px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Deck