import React from "react";
import Home from "./Pages/Home";
import GlobalStyle from "./styles/globals";
import { GamesProvider } from "./context/gameContext";
function App() {
  return (
      <>
          <GlobalStyle />
          <GamesProvider>
              <section>
                  <Home />
              </section>
          </GamesProvider>
      </>
  )
}

export default App;
