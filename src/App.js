import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/globals";
import { Authprovider } from "./Components/Auth/Authcontext";


function App() {
  return (
    <>
      <GlobalStyle />
      <Authprovider>
      <section>
        <Home />
      </section>
      </Authprovider>
    </>
  );
}

export default App;
