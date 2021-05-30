import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import * as API from '../../data/_data'
import { LIGHTORANGE, ORANGE, PURPLE } from '../../utils/colors'

const NewQuestion = ({ route, navigation }) => {
    const [question, setQuestion] = React.useState('')
    const [answer, setAnswer] = React.useState('')

    const handleSubmit = () => {
        API.addCardToDeck({ id: route.params.deckId, question, answer })
        .then(res => {
            console.log(res)
            navigation.navigate('Individual Deck', { refresh: true })
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

            <SubmitButton onPress={() => handleSubmit()}><StyledText>Submit</StyledText></SubmitButton>
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
    height: 50px;
    margin: 10px 0;
    border-radius: 3px;
    border: 2px solid ${LIGHTORANGE};
    padding: 5px;
`

const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: ${ORANGE};
`

const StyledText = styled.Text`
    color: #fff;
`

export default NewQuestion