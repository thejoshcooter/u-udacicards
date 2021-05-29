import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity} from 'react-native'
import * as API from '../../data/_data'
import QuizCard from './QuizCard'
import { NavigationContainer } from '@react-navigation/native'

const Quiz = ({ route, navigation }) => {
    const [activeCard, setActiveCard] = React.useState(0)
    const [cards, setCards] = React.useState([])
    
    React.useEffect(() => {
        API.getDeck(route.params.deckId)
        .then(res => {
            console.log(res)
            let quizSet = res.questions.map((card, index) => {
                return { ...card, id: index, correct: null}
            })
            setCards(quizSet)
        })
        .catch(e => console.error(e))
    }, [])

    const setCardAnswer = (id, answer) => {
        let updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, correct: answer }
            } else {
                return card
            }
        })
        console.log('updated cards: ', updatedCards)
        setCards(updatedCards)
    }

    const goToPrevious = () => {
        if (activeCard !== 0) {
            setActiveCard((state) => state - 1)
        }
    }

    const goToNext = () => {
        if (activeCard !== cards.length) {
            setActiveCard((state) => state + 1)
        }
    }

    const generateResults = () => {
        let total = cards.length
        let correct = cards.filter(card => card.correct).length
        console.log('total ', total, 'correct ', correct)
        navigation.navigate('Results', { total: total, correct: correct })
    }
    
    return (
        <>
        <Container>
            <Text>quiz view</Text>
            <Text>deck id: {route.params.deckId}</Text>
            {cards && cards.map((card, index) => {
                if (activeCard === index) {
                    return (
                        <QuizCard 
                            key={index}
                            id={index}
                            question={card.question}
                            answer={card.answer}
                            answered={card.answered}
                            correct={card.correct}
                            setCardAnswer={setCardAnswer}
                        />
                    )
                }
            })}
            <Controls>
                {activeCard !== 0 && (
                    <ControlButton onPress={() => goToPrevious()}><Text>Previous</Text></ControlButton>
                )}

                {activeCard !== cards.length - 1 && (
                    <ControlButton onPress={() => goToNext()}><Text>Next</Text></ControlButton>
                )}

                {activeCard === cards.length - 1 && (
                    <TouchableOpacity onPress={() => generateResults()}><Text>Results</Text></TouchableOpacity>
                )}
            </Controls>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`

const Controls = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ControlButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: transparent;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    margin: 5px;
`

export default Quiz