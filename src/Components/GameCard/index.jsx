import React, { useEffect } from 'react'
import { Container, GameCard } from './style'
import { useGames } from '../../context/gameContext'
import Carousel from 'react-material-ui-carousel'

export const Card = () => {
    const { games, getGames } = useGames()

    useEffect(() => {
        getGames()
    }, [])

    console.log(
        'Games: ',
        games.map((game) => game)
    )
    return (
        <Container>
            <Carousel>
                {games.map((game, index) => (
                    <img key={index} src={game.thumbnail} />
                ))}
            </Carousel>
        </Container>
    )
}
