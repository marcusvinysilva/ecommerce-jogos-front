import React from 'react';
import GlobalStyle from './styles/globals';
// import { Authprovider } from "./Components/Auth/Authcontext";
import { JwtHandler } from './Components/Auth/jwthandler';
import GamesContextProvider from './context/';
import { AppRoutes } from './routes';

function App() {
  const auth = JwtHandler.isJwtValid();
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
