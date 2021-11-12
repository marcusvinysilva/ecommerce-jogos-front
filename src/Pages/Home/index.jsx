import React from 'react';
import GameList from '../../Components/GameList';
import { Hero } from '../../Components/Hero';
export default function Home() {
  return (
    <section>
      <Hero />
      <GameList />
    </section>
  );
}
