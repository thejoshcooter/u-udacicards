import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import * as API from '../../data/_data'

const IndividualDeck = ({ route, navigation }) => {
    const [deck, setDeck] = React.useState(null)
    
    React.useEffect(() => {
        API.getDeck(route.params.deckId)
        .then(res => {
            setDeck(res)
        })
        .catch(e => console.error(e))
    }, [])

    return (
        <>
        {deck != null && (
            <Container>
                <Header>
                    <Text>{deck.title}</Text>
                    <Text>{deck.questions.length}</Text>
                </Header>

                <TouchableOpacity><Text>Add Card</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}><Text>Start Quiz</Text></TouchableOpacity>
                <TouchableOpacity><Text>Delete Deck</Text></TouchableOpacity>
            </Container>
        )}
        </>
    )
}

const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`

const Header = styled.View`
    width: 80%;
    height: 30%;
    justify-content: center;
    align-items: center;
`

export default IndividualDeck