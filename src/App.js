import React from 'react';
import Home from './Pages/Home';
import GlobalStyle from './styles/globals';
// import { Authprovider } from "./Components/Auth/Authcontext";
import Userpage from './Pages/Home/Userpage';
import { JwtHandler } from './Components/Auth/jwthandler';
import Header from './Components/Header';

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
