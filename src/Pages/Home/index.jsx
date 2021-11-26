import React from 'react';

import { useGames } from '../../context/GameContext';
import { Footer } from '../../Components/Footer';
import GameList from '../../Components/GameList';
import Header from '../../Components/Header';
import { Hero } from '../../Components/Hero';
export default function Home() {
  const { game } = useGames();

  return (
    <section>
      <Header />
      {!!game && (
        <Hero
          image={game.images}
          title={game.gameName}
          id={game.id}
          game={{ ...game }}
        />
      )}
      <GameList />
      <Footer />
    </section>
  );
}
