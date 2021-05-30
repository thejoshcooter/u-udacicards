import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { ORANGE, PURPLE } from '../../utils/colors'

const Results = ({ route, navigation }) => {
    console.log('route params at results: ', route.params)
    
    return (
        <>
        <Container>
            <ScoreCard>
                <Stats>
                    <StyledText>Quiz Results: </StyledText>
                    <StyledText># questions asked: {route.params.total}</StyledText>
                    <StyledText># questions correct: {route.params.correct}</StyledText>
                    <StyledText>% questions correct: {route.params.correct / route.params.total * 100}%</StyledText>
                </Stats>
                <Controls>
                    <ControlButton onPress={() => navigation.navigate('Quiz', { refresh: Math.random() * 100000 })}><StyledText>Restart Quiz</StyledText></ControlButton>
                    <ControlButton onPress={() => navigation.navigate('Individual Deck')}><StyledText>Go to Deck</StyledText></ControlButton>
                </Controls>
            </ScoreCard>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex: 1;
`
const ScoreCard = styled.View`
    width: 80%;
    height: 50%;
    background-color: ${PURPLE};
    border-radius: 3px;
    justify-content: space-around;
    align-items: center;
`

const Stats = styled.View`
    width: 100%;
    padding: 0 25px;
`

const Controls = styled.View`
    width: 100%;
    min-height: 50px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ControlButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background-color: ${ORANGE}};
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: #fff;
    font-weight: bold;
    margin: 5px 0;
`

export default Results