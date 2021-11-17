import styled from 'styled-components'
import React from 'react'
import { Footer } from '../../Components/Footer'
import GameList from '../../Components/GameList'
import Header from '../../Components/Header'

export default function Home() {
    return (
        <section>
            <Header />
            <GameList />
            <Footer />
        </section>
    )
}
