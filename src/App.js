import React from "react";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import GlobalStyle from "./styles/globals";
import { GamesProvider } from "./context/gameContext";
function App() {
  return (
      <>
          <GlobalStyle />
          <GamesProvider>
            <Home />
              
          </GamesProvider>
      </>
  )
}

export default App;
