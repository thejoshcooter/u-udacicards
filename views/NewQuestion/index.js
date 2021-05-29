import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import * as API from '../../data/_data'

const NewQuestion = ({ route }) => {
    const [question, setQuestion] = React.useState('')
    const [answer, setAnswer] = React.useState('')

    const handleSubmit = () => {
        API.addCardToDeck({ id: route.params.deckId, question, answer })
        .then(res => {
            console.log(res)
        })
        .catch(e => console.error(e))
    }
    
    return (
        <>
        <Container>
            <StyledInput 
                name='question'
                placeholder='question'
                value={question}
                onChangeText={(text) => setQuestion(text)}
            />

            <StyledInput 
                name='answer'
                placeholder='answer'
                value={answer}
                onChangeText={(text) => setAnswer(text)}
            />

            <SubmitButton onPress={() => handleSubmit()}><Text>Submit</Text></SubmitButton>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledInput = styled.TextInput`
    width: 80%;
    height: 40px;
    margin: 10px 0;
    border-radius: 3px;
    border: 2px solid black;
`

const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 2px solid black;
`

export default NewQuestion