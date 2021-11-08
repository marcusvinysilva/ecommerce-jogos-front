import React, { useEffect } from 'react';
import { useGames } from '../../context/gameContext';
// import { Content } from './style';

export const Card = () => {
    const { getGames, gameList } = useGames();
    const listGames = [];

    // for (let i = 0; i < (games.length - 85); i++) {
    //     const thumbnail = games[i].thumbnail;
    //     listGames.push(<img src={thumbnail} alt={thumbnail} />)
    // }

    useEffect(() => {
        getGames();
    }, [])
    return (
        gameList.map((game, index) => (
            <div key={index} className='cada-card'>
                {game}
            </div>
        ))
    )
}
