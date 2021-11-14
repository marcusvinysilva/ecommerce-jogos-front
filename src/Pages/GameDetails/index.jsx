import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from '../../Components/Carousel';

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
        <div>
          <img src={selectedGame.thumbnail} alt={selectedGame.title} />
          <h1>{selectedGame.title}</h1>
          <p>Description:</p>
          <div>{selectedGame.description}</div>
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
      )}
    </section>
  );
}
