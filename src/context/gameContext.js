import React, { createContext, useContext, useState } from 'react'
import api from '../services/api'

const GamesContext = createContext(null)

const GamesProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false)
  const [games, setGame] = useState([])
  const [selectGame, setSelectGame] = useState(null)
  const gameList = []

  const getGames = async () => {
    setIsFetch(true)
    try {
      const { data } = await api.get('/games')
      setGame(data)
    } catch {
      console.error('Something went wrong!')
    } finally {
      setIsFetch(false)
    }
  }

  for (let i = 0; i < games.length - 85; i++) {
    const thumbnail = games[i].thumbnail
    const title = games[i].title
    gameList.push(<img src={thumbnail} alt={title} />)
  }

  return (
    <GamesContext.Provider
      value={{
        isFetch,
        selectGame,
        setGame,
        games,
        gameList,
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
