import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const Results = ({ route, navigation }) => {
    console.log('route params at results: ', route.params)
    
    return (
        <>
        <Container>
            <Text>Number of questions asked: {route.params.total}</Text>
            <Text>Number of questions correct: {route.params.correct}</Text>
            <Text>Precentage of questions correct: {route.params.correct / route.params.total * 100}%</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz', { refresh: Math.random() * 100000 })}><Text>Restart Quiz</Text></TouchableOpacity>
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