import React from 'react';
import { Footer } from '../../Components/Footer';
import GameList from '../../Components/GameList';
import Header from '../../Components/Header';
import { Hero } from '../../Components/Hero';
export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <GameList />
      <Footer />
    </section>
  );
}
