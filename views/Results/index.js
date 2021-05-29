import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const Results = ({ route, navigation }) => {
    return (
        <>
        <Container>
            <Text>Number of questions asked: {route.params.total}</Text>
            <Text>Number of questions correct: {route.params.correct}</Text>
            <Text>Precentage of questions correct: {route.params.correct / route.params.total * 100}%</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Individual Deck')}><Text>Go to Deck</Text></TouchableOpacity>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`

export default Results