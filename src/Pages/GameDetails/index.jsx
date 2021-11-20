import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
// import { Carousel } from '../../Components/Carousel';
import { Hero } from '../../Components/Hero';

import { useGames } from '../../context/GameContext';
export default function GameDetails() {
  const { selectedGame, getSelectedGame } = useGames();
  const { id } = useParams();

  useEffect(() => {
    getSelectedGame(id);
  }, [id]);
  console.log('Selected game', selectedGame ? selectedGame.gameName : 'vazio');
  return (
    <section>
      {selectedGame && (
        <>
          <Header />
          <Hero image={selectedGame.images} title={selectedGame.gameName} />
          <div>
            <p>Description:</p>
            <div>
              <div>{selectedGame.description}</div>
            </div>
            {/* <Carousel show={4} infiniteLoop>
              {selectedGame.screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img
                    src={screenshot.image}
                    alt={`screenshot-${selectedGame.title}-${screenshot.id}}`}
                  />
                </div>
              ))}
            </Carousel> */}
          </div>
        </>
      )}
    </section>
  );
}