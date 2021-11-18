import React from 'react';
import GlobalStyle from './styles/globals';
import { GamesProvider } from './context/gameContext';
import { AppRoutes } from './routes';
function App() {
  return (
      <>
          <GlobalStyle />
          <GamesProvider>
            <Home />
            <section>
            <Footer/>
            </section>
          </GamesProvider>

      </>
  )
}

export default App;
