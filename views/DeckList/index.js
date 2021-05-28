import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as API from '../../data/_data'

const DeckList = () => {
    return (
        <>
        <View>
            <Text>Deck List View</Text>
            <TouchableOpacity onPress={() => API.checkStorage()}><Text>Check Async Storage</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => API.clearStorage()}><Text>Clear Storage</Text></TouchableOpacity>
        </View>
        </>
    )
}

export default DeckList