import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './views/DeckList'
import IndividualDeck from './views/IndividualDeck'
import NewDeck from './views/NewDeck'
import NewQuestion from './views/NewQuestion'
import Quiz from './views/Quiz'

// create navigation
const PrimaryStack = createStackNavigator()

const App = () => {
  return (
    <>
    <NavigationContainer>
      <PrimaryStack.Navigator initialRouteName='DeckList'>
        <PrimaryStack.Screen name='DeckList' component={DeckList} options={{ title: 'Home' }} />
        <PrimaryStack.Screen name='Individual Deck' component={IndividualDeck} />
        <PrimaryStack.Screen name='NewDeck' component={NewDeck} />
        <PrimaryStack.Screen name='NewQuestion' component={NewQuestion} />
        <PrimaryStack.Screen name='Quiz' component={Quiz} />
      </PrimaryStack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;
