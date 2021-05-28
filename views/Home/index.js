import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Decks from '../Decks'
import NewDeck from '../NewDeck'

const Tab = createBottomTabNavigator()

const Home = () => {
    return (
        <>
        <Tab.Navigator>
            <Tab.Screen name='Decks' component={Decks} />
            <Tab.Screen name='Create New Deck' component={NewDeck} />
        </Tab.Navigator>
        </>
    )
}

export default Home