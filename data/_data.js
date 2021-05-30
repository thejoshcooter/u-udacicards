import { AsyncStorage } from 'react-native'

export let store = {
    decks: [
        {
            id: 0,
            title: 'Welcome',
            questions: [
                {
                    question: 'Is this a first question?',
                    answer: 'This is an answer.'
                },
                {
                    question: 'Is this a second question?',
                    answer: 'This is an answer.'
                }
            ]
        },
        {
            id: 1,
            title: 'Demo',
            questions: [
                {
                    question: 'This is a question?',
                    answer: 'This is an answer.'
                },
                {
                    question: 'This is a question?',
                    answer: 'This is an answer.'
                }
            ]
        }
    ]
}

// HELPERS

export const initStorage = async () => {
    let storage = await AsyncStorage.getItem('store')

    if (!storage) {
        AsyncStorage.setItem('store', JSON.stringify(store))
        .then(res => {
            console.log('[ASYNCSTORAGE INITIALIZED]')
        })
        .catch(e => console.error(e))
    }
}


export const checkStorage = async () => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        return JSON.parse(storage)
    } else {
        return null
    }
}


export const clearStorage = () => {
   AsyncStorage.removeItem('store')
   .then(res => {
       console.log('[STORAGE CLEARED]')
   })
   .catch(e => {
       console.error('error clearing storage: ', e)
   })
}


export const getDecks = async () => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        return JSON.parse(storage).decks
    } else if (!storage) {
        initStorage()
    }
}


export const getDeck = async (id) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage).decks
        target = storage.filter(deck => deck.id === id)[0]
        return target
    }
}


export const createDeck = async (title) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage)
        // let deckId = storage.length
        let deckId = Math.floor(Math.random() * 10000)
        let deck = { id: deckId, title: title, questions: [] }
        storage.decks.push(deck)
        AsyncStorage.setItem('store', JSON.stringify(storage))
        return deckId
    }
}


export const addCardToDeck = async ({ id, question, answer }) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage)
        let updatedDecks = storage.decks.map(deck => {
            if (deck.id === id) {
                return { ...deck, questions: [ ...deck.questions, { question: question, answer: answer } ] }
            } else {
                return deck
            }
        })
        storage = { ...storage, decks: updatedDecks }
        AsyncStorage.setItem('store', JSON.stringify(storage))
        return storage.decks
    }
}

export const deleteDeck = async (id) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage)

        let updatedDecks = storage.decks.filter(deck => deck.id !== id)

        storage = { ...storage, decks: updatedDecks }

        AsyncStorage.setItem('store', JSON.stringify(storage))
        return storage.decks
    }
}