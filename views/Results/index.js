import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { ORANGE, PURPLE } from '../../utils/colors'
import { scheduleNextQuizReminder } from '../../utils/notifications'

const Results = ({ route, navigation }) => {

    React.useEffect(() => {
        scheduleNextQuizReminder()
    }, [])
    
    return (
        <>
        <Container>
            <ScoreCard>
                <Stats>
                    <ResultsTitle>Quiz Results: </ResultsTitle>
                    <StatText># questions asked:</StatText><ResultText>{route.params.total}</ResultText>
                    <StatText># questions correct:</StatText><ResultText>{route.params.correct}</ResultText>
                    <StatText>% questions correct:</StatText><ResultText>{Math.round(route.params.correct / route.params.total * 100)}%</ResultText>
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
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`

const Stats = styled.View`
    width: 100%;
    padding-left: 25px;
`

const ResultsTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
`

const StatText = styled.Text`
    color: ${ORANGE};
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
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

const ResultText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
`

const StyledText = styled.Text`
    color: #fff;
`

export default Results