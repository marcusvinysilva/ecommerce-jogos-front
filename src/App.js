import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/globals";
import {Router} from 'react-router-dom'
import {Authprovider} from './Components/Auth/Authcontext'

function App() {
  return (
    <>
    <Authprovider value={{authenticated: false}}>
      <GlobalStyle />
      <section>
        <Home />
      </section>
      </Authprovider>
    </>
  );
}

export default App;
