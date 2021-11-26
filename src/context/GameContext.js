import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

const GamesContext = createContext(null);

const GamesProvider = ({ children }) => {
  const [isFetch, setIsFetch] = useState(false);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectGame] = useState(null);
  const [selectedExternalGame, setSelectExternalGame] = useState(null);
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
      const { data } = await api.get(`/games/findgamebyid/${id}`);
      setSelectGame(data.game);
    } catch {
      console.error('Something went wrong!');
    }
  };

  const game = games[Math.floor(Math.random() * 11)];

  for (let i = 0; i < games.length; i++) {
    const thumbnail = games[i].images;
    const title = games[i].gameName;
    gameList.push(<img src={thumbnail} alt={title} />);
  }

  return (
    <GamesContext.Provider
      value={{
        isFetch,
        setGames,
        game,
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
