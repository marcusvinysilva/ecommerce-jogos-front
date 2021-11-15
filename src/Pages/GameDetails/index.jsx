import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from '../../Components/Carousel';
import { Hero } from '../../Components/Hero';

import { useGames } from '../../context/gameContext';
export default function GameDetails() {
  const { selectedGame, getSelectedGame } = useGames();
  const { id } = useParams();

  useEffect(() => {
    getSelectedGame(id);
  }, [id]);

  return (
    <section>
      {selectedGame && (
        <>
          <Hero image={selectedGame.thumbnail} title={selectedGame.title} />
          <div>
            <p>Description:</p>
            <div>
              <div>{selectedGame.description}</div>
            </div>
            <Carousel show={4} infiniteLoop>
              {selectedGame.screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img
                    src={screenshot.image}
                    alt={`screenshot-${selectedGame.title}-${screenshot.id}}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </section>
  );
}
