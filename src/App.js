import React from 'react';
import GlobalStyle from './styles/globals';
import GamesContextProvider from './context/';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <GamesContextProvider>
        <AppRoutes />
      </GamesContextProvider>
    </>
  );
}

export default App;
