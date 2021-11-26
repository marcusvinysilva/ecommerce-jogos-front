import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Hero } from '../../Components/Hero';
import { Footer } from '../../Components/Footer';
import Header from '../../Components/Header';
import {
  Description,
  Divgamedetails,
  Gamedescription,
  Gameprice,
} from './style';
// import { Carousel } from '../../Components/Carousel';

import { useGames } from '../../context/GameContext';
export default function GameDetails() {
  const { selectedGame, getSelectedGame } = useGames();
  const { id } = useParams();

  useEffect(() => {
    getSelectedGame(id);
  }, []);

  return (
    <section>
      {selectedGame && (
        <>
          <Header />
          <Hero image={selectedGame.images} title={selectedGame.gameName} />
          <Divgamedetails>
            <Description>Description:</Description>
            <Gamedescription>
              <div>{selectedGame.description}</div>
            </Gamedescription>
            <div>
              <Gameprice>Game price: ${selectedGame.price}</Gameprice>
            </div>
            {/* <Carousel show={4} infiniteLoop>
              {selectedGame.screenshots?.map((screenshot, index) => (
                <div key={index}>
                  <img
                    src={screenshot.image}
                    alt={`screenshot-${selectedGame.title}-${screenshot.id}}`}
                  />
                </div>
              )) || []}
            </Carousel> */}
          </Divgamedetails>
        </>
      )}
      <Footer />
    </section>
  );
}
