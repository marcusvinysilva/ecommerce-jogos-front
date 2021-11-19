import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/globals";
import { Authprovider } from "./Components/Auth/Authcontext";
import Userpage from "./Pages/Home/Userpage";
import Header from "./Components/Header";


function App() {
  return (
    <>
      <GlobalStyle />
      <Authprovider>
      <Header/>
      <section>
      <Userpage />
      </section>
      </Authprovider>
    </>
  );
}

export default App;
