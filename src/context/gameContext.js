import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

const GamesContext = createContext(null);

const GamesProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectGame] = useState(null);
  const gameList = [];

  const getGames = async () => {
    setIsFetch(true);
    try {
      const { data } = await api.get('/games');
      setGames(data);
    } catch {
      console.error('Something went wrong!');
    } finally {
      setIsFetch(false);
    }
  };

  const getSelectedGame = async (id) => {
    try {
      const { data } = await api.get(`/games/${id}`);
      setSelectGame(data);
    } catch {
      console.error('Something went wrong!');
    }
  };

  for (let i = 0; i < games.length - 85; i++) {
    const thumbnail = games[i].images;
    const title = games[i].gameName;
    gameList.push(<img src={thumbnail} alt={title} />);
  }

  return (
    <GamesContext.Provider
      value={{
        isFetch,
        setGames,
        games,
        gameList,
        setSelectGame,
        getGames,
        getSelectedGame,
        selectedGame,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

const useGames = () => {
  return useContext(GamesContext);
};

export { GamesProvider, useGames };
