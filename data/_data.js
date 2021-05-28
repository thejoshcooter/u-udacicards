import { AsyncStorage } from 'react-native'

export let store = {
    decks: [
        {
            id: 0,
            title: 'Welcome',
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

// init AsyncStorage store
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

// check AsyncStorage store
export const checkStorage = async () => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        return JSON.parse(storage)
    } else {
        return null
    }
}

// clear AsyncStorage store
export const clearStorage = () => {
   AsyncStorage.removeItem('store')
   .then(res => {
       console.log('[STORAGE CLEARED]')
   })
   .catch(e => {
       console.error('error clearing storage: ', e)
   })
}

// getDecks: return all of the decks along with their titles, questions, and answers
export const getDecks = async () => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        return JSON.parse(storage).decks
    } else if (!storage) {
        initStorage()
    }
}

// getDeck: take in a single `id` argument and return the deck associated with that id
export const getDeck = async (id) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage).decks
        target = storage.filter(deck => deck.id === id)[0]
        return target
    }
}

// TODO
// saveDeckTitle: take in a single `title` argument and add it to the decks
// * changing this to a create deck function

export const createDeck = async (title) => {
    let storage = await AsyncStorage.getItem('store')

    if (storage) {
        storage = JSON.parse(storage)
        let deckId = storage.length
        let deck = { id: Math.floor(Math.random() * 10000), title: title, questions: [] }
        storage.decks.push(deck)
        AsyncStorage.setItem('store', JSON.stringify(storage))
        return storage
    }
}


// TODO
// addCardToDeck: take in two arguments, `title` and `card`, and will add the card to the list of questions for the deck with associated title
// * changing this up to work based of deck id instead of title
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