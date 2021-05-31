import React from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as API from './data/_data'
import Home from './views/Home'
import IndividualDeck from './views/IndividualDeck'
import Quiz from './views/Quiz'
import NewQuestion from './views/NewQuestion'
import Results from './views/Results'
import { getInitialAppPermissions, scheduleNotification } from './utils/notifications'

// create navigation
const Stack = createStackNavigator()

const App = () => {

  const [fetching, setFetching] = React.useState(true)
  
  React.useEffect(() => {
    API.initStorage()
    API.getDecks()
    .then(res => {
      console.log('[SERVER RES]', res)
      setFetching(false)
    })
    .catch(e => console.error(e))
    getInitialAppPermissions()
  }, [fetching])
  
  return (
    <>
    {fetching && <ActivityIndicator size='large' />}

    {!fetching && (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Individual Deck' component={IndividualDeck} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='Add Question' component={NewQuestion} />
        <Stack.Screen name='Results' component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
    )}
    </>
  )
}

export default App;
