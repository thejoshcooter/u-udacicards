import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import * as API from '../../data/_data'
import Deck from '../../components/Deck'
import { withRepeat } from 'react-native-reanimated'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

const Decks = ({ navigation, route }) => {
    const [decks, setDecks] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(1000).then(() => setRefreshing(false))
    })

    React.useEffect(() => {
        API.getDecks()
        .then(res => {
            setDecks(res)
        })
        .catch(e => console.error(e))
    }, [route.params, refreshing])
    
    return (
        <>
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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