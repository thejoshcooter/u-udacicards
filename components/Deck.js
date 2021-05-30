import * as React from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { PURPLE } from '../utils/colors'

const Deck = ({ id, title, questions, navigation }) => {
    return (
        <>
        <Container onPress={() => navigation.navigate('Individual Deck', { deckId: id })}>
            <DeckTitle>{title}</DeckTitle>
            <StyledText>cards: {questions.length}</StyledText>
        </Container>
        </>
    )
}

const Container = styled.TouchableOpacity`
    width: 80%;
    height: 20%;
    margin: 10px auto;
    border-radius: 3px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${PURPLE};
`
const DeckTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`

const StyledText = styled.Text`
    color: #fff;
`

export default Deck