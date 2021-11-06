import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

const GamesContext = createContext(null)

const GamesProvider = ({ children }) => {
    const [isFetch, setIsFetch] = useState(false)
    const [games, setGame] = useState([])
    const [selectGame, setSelectGame] = useState(null)

    const getGames = async () => {
        setIsFetch(true)
        try {
            const { data } = await api.get('/games')
            setGame(data)
        } catch {
            console.log('Something went wrong!')
        } finally {
            setIsFetch(false)
        }
    }

    return (
        <GamesContext.Provider
            value={{
                isFetch,
                selectGame,
                setGame,
                games,
                setSelectGame,
                getGames,
            }}
        >
            {children}
        </GamesContext.Provider>
    )
}

const useGames = () => {
    return useContext(GamesContext)
}

export { GamesProvider, useGames }
