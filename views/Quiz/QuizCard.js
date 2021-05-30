import * as React from 'react'
import styled from 'styled-components'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { ORANGE, PURPLE } from '../../utils/colors'

const QuizCard = ({ id, question, answer, answered, correct, setCardAnswer }) => {
    const [reveal, setReveal] = React.useState(false)
    
    return (
        <>
        <Container>
            <View>
                {correct && <Text>You got it correct!</Text>}
                {correct !== null && !correct && <Text>You got it incorrect.</Text>}
            </View>

            <QuestionArea answer={reveal}>
                {!reveal && <CardText>{question}</CardText>}
                {reveal && <CardText>{answer}</CardText>}
                <RevealButton reveal={reveal} answer={null} onPress={() => setReveal(!reveal)}><RevealText reveal={reveal}>{!reveal ? 'Reveal' : 'Hide'}</RevealText></RevealButton>
            </QuestionArea>

            <Controls>
                    <ControlButton reveal={reveal} correct={true} onPress={() => setCardAnswer(id, true)}><ControlText correct={true}>Correct</ControlText></ControlButton>
                    <ControlButton reveal={reveal} correct={false} onPress={() => setCardAnswer(id, false)}><ControlText correct={false}>Incorrect</ControlText></ControlButton>
            </Controls>
        </Container>
        </>
    )
}

const Container = styled.View`
    width: 90%;
    height: 80%;
    margin: 10px 0;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
`

const QuestionArea = styled.View`
    width: 100%;
    min-height: 200px;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.answer ? `${ORANGE}` : `${PURPLE}`};
    padding: 25px;
    border-radius: 3px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`

const RevealButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid ${props => props.reveal ? `${PURPLE}` : `${ORANGE}` };
    margin: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const RevealText = styled.Text`
    color: ${props => props.reveal ? `${PURPLE}` : `${ORANGE}` };
    font-weight: bold;
`

const CardText = styled.Text`
    font-size: 24px;
    text-align: center;
    color: #fff;
`

const Controls = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50px;
`

const ControlButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid ${props => props.correct ? '#11DB00' : '#FF0000'};
    margin: 5px;
    justify-content: center;
    align-items: center;
    display: ${props => props.reveal ? 'flex' : 'none'};
`

const ControlText = styled.Text`
    color: ${props => props.correct ? '#11DB00' : '#FF0000'};
    font-weight: bold;
`

const StyledText = styled.Text`
    color: #fff;
    font-weight: bold;
`

export default QuizCard