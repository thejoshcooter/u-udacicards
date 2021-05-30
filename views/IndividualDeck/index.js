import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import * as API from '../../data/_data'
import { ORANGE } from '../../utils/colors'

const IndividualDeck = ({ route, navigation }) => {
    const [deck, setDeck] = React.useState(null)
    
    React.useEffect(() => {
        API.getDeck(route.params.deckId)
        .then(res => {
            setDeck(res)
        })
        .catch(e => console.error(e))
    }, [route.params])

    return (
        <>
        {deck != null && (
            <Container>
                <Header>
                    <DeckTitle>{deck.title}</DeckTitle>
                    <Text>{deck.questions.length} cards</Text>
                </Header>

                <ControlButton onPress={() => navigation.navigate('Add Question', { deckId: route.params.deckId })}><StyledText>Add Card</StyledText></ControlButton>
                <ControlButton onPress={() => navigation.navigate('Quiz', { deckId: route.params.deckId })}><StyledText>Start Quiz</StyledText></ControlButton>
                <TouchableOpacity onPress={() => API.deleteDeck(route.params.deckId).then((res) => navigation.navigate('Decks', { refresh: true }))}><Text style={{ color: 'red', margin: 5 }}>Delete Deck</Text></TouchableOpacity>
            </Container>
        )}
        </>
    )
}

const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Header = styled.View`
    width: 80%;
    height: 30%;
    justify-content: center;
    align-items: center;
`

const DeckTitle = styled.Text`
    font-size: 36px;
    font-weight: bold;
`

const ControlButton = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    border-radius: 3px;
    background-color: ${ORANGE};
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
`

const StyledText = styled.Text`
    color: #fff;
`

export default IndividualDeck