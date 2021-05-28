import { AsyncStorage } from 'react-native'

let store = {
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
export const checkStorage = () => {
    AsyncStorage.getItem('store')
    .then(res => {
        console.log('[ASYNC STORAGE]', JSON.parse(res))
    })
    .catch(e => console.error(e))
}

// clear AsyncStorage store
export const clearStorage = () => {
    AsyncStorage.clear()
    .then(res => {
        console.log('[STORAGE CLEARED]')
    })
    .catch(e => console.error(e))
}

// transfer store to AsyncStorage
export const saveToAsyncStorage = (store) => {
    AsyncStorage.setItem('store', store)
    .then(res => {
        console.log('[ASYNCSTORAGE UPDATE]', res)
    })
    .catch(e => console.error(e))
}

// getDecks: return all of the decks along with their titles, questions, and answers
export const getDecks = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(store.decks)
        }, 1000)
    })
}

// getDeck: take in a single `id` argument and return the deck associated with that id
export const getDeck = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let deck = store.decks.filter(deck => deck.id === id)[0]
            res(deck)
        }, 1000)
    })
}

// saveDeckTitle: take in a single `title` argument and add it to the decks
// * changing this to a create deck function
export const createDeck = (title) => {
    return new Promise((res, rej) => {
        let id = store.decks.length - 1
        let deck = { id: id, title: title, questions: [] }

        setTimeout(() => {
            store.decks.push(deck)
            res(store.decks)
        }, 1000)
    })
}


// addCardToDeck: take in two arguments, `title` and `card`, and will add the card to the list of questions for the deck with associated title
// * changing this up to work based of deck id instead of title
export const addCardToDeck = (id, card) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            store.decks[id] = { ...store.decks[id], questions: [ ...store.decks[id].questions, card ] }

            res(store.decks[id])
        }, 1000)
    })
}