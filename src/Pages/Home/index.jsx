import React from 'react'
import Footer  from '../../Components/Footer'
import GameList from '../../Components/GameList'

export default function Home() {
    return (
        <section>
            <GameList />
            <section>
                <Footer/>
            </section>

        </section>
    )
}
