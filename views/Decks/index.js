import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import * as API from '../../data/_data'
import Deck from '../../components/Deck'

const Decks = ({ navigation }) => {
    const [decks, setDecks] = React.useState([])

    React.useEffect(() => {
        API.getDecks()
        .then(res => {
            setDecks(res)
        })
        .catch(e => console.error(e))
    }, [])
    
    return (
        <>
        <SafeAreaView>
            {decks && decks.map(deck => (
                <Deck 
                    key={deck.id}
                    id={deck.id}
                    title={deck.title}
                    questions={deck.questions}
                    navigation={navigation}
                />
            ))}
        </SafeAreaView>
        </>
    )
}

export default Decks