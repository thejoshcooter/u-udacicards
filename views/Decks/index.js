import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import * as API from '../../data/_data'
import Deck from '../../components/Deck'

const Decks = ({ navigation, route }) => {
    const [decks, setDecks] = React.useState([])
    console.log('decks route: ', route)

    React.useEffect(() => {
        API.getDecks()
        .then(res => {
            setDecks(res)
        })
        .catch(e => console.error(e))
    }, [route.params])
    
    return (
        <>
        <ScrollView>
            {decks && decks.length !== 0 && decks.map(deck => (
                <Deck 
                    key={deck.id}
                    id={deck.id}
                    title={deck.title}
                    questions={deck.questions}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
        </>
    )
}

export default Decks