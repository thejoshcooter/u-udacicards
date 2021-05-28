import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as API from '../../data/_data'

const DeckList = () => {
    // handlers
    const handleGetDeck = () => {
        API.getDeck(0)
        .then(res => {
            console.log('[getDeck response]', res)
        })
        .catch(e => console.error(e))
    }
    
    return (
        <>
        <View>
            <Text>Deck List View</Text>
            <TouchableOpacity onPress={() => API.checkStorage().then(res => console.log(res))}><Text>Check Async Storage</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.clearStorage()}><Text>Clear Storage</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.getDecks().then(res => console.log(res))}><Text>Get Decks</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.getDeck(0).then(res => console.log(res))}><Text>Get First Deck</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.createDeck('New Deck').then(res => console.log(res))}><Text>Create Deck</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.addCardToDeck({ id: 0, question: 'hello?', answer: 'there' }).then(res => console.log(res))}><Text>Add Card to Deck</Text></TouchableOpacity>
        </View>
        </>
    )
}

export default DeckList