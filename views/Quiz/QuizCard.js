import * as React from 'react'
import styled from 'styled-components'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const QuizCard = ({ id, question, answer, answered, correct, setCardAnswer }) => {
    const [reveal, setReveal] = React.useState(false)
    
    return (
        <>
        <Container>
            {correct && <Text>You got it correct!</Text>}
            {correct !== null && !correct && <Text>Unfortunately that answer is incorrect.</Text>}
            <Text>{question}</Text>
            {reveal && <Text>{answer}</Text>}
            <ControlButton answer={null} onPress={() => setReveal(!reveal)}><Text>Reveal</Text></ControlButton>
            <Controls>
                <ControlButton onPress={() => setCardAnswer(id, true)}><Text>Correct</Text></ControlButton>
                <ControlButton onPress={() => setCardAnswer(id, false)}><Text>Incorrect</Text></ControlButton>
            </Controls>
        </Container>
        </>
    )
}

const Container = styled.View`
    width: 80%;
    height: 80%;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 2px solid black;
`

const Controls = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ControlButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid black;
    margin: 5px;
    justify-content: center;
    align-items: center;
`

export default QuizCard