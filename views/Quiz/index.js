import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity} from 'react-native'
import * as API from '../../data/_data'
import QuizCard from './QuizCard'
import { NavigationContainer } from '@react-navigation/native'
import { ORANGE, PURPLE } from '../../utils/colors'

const Quiz = ({ route, navigation }) => {
    const [activeCard, setActiveCard] = React.useState(0)
    const [cards, setCards] = React.useState([])
    console.log('route params at quiz: ', route.params)
    
    React.useEffect(() => {
        console.log('refresh: ', route.params.refresh)
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

    React.useEffect(() => {
        setActiveCard(0)
        API.getDeck(route.params.deckId)
        .then(res => {
            console.log(res)
            let quizSet = res.questions.map((card, index) => {
                return { ...card, id: index, correct: null}
            })
            setCards(quizSet)
        })
        .catch(e => console.error(e))
    }, [route.params.refresh])

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
                    <ControlButton onPress={() => goToPrevious()}><StyledText>Previous</StyledText></ControlButton>
                )}

                {activeCard !== cards.length - 1 && (
                    <ControlButton onPress={() => goToNext()}><StyledText>Next</StyledText></ControlButton>
                )}

                {activeCard === cards.length - 1 && (
                    <ResultButton onPress={() => generateResults()}><StyledText>Results</StyledText></ResultButton>
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
    background-color: ${ORANGE};
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 3px;
`

const StyledText = styled.Text`
    color: #fff;
`

const ResultButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: ${PURPLE};
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 3px;
`

export default Quiz