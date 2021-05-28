import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as API from './data/_data'
import Home from './views/Home'
import IndividualDeck from './views/IndividualDeck'
import Quiz from './views/Quiz'

// create navigation
const Stack = createStackNavigator()

const App = () => {
  
  React.useEffect(() => {
    API.initStorage()
    API.getDecks()
    .then(res => {
      console.log('[SERVER RES]', res)
    })
    .catch(e => console.error(e))
  }, [])
  
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Individual Deck' component={IndividualDeck} />
        <Stack.Screen name='Quiz' component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;
