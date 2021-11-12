import React from 'react';
import GlobalStyle from './styles/globals';
import { GamesProvider } from './context/gameContext';
import { AppRoutes } from './routes';
function App() {
  return (
    <>
      <GlobalStyle />
      <GamesProvider>
        <AppRoutes />
      </GamesProvider>
    </>
  );
}

export default App;
