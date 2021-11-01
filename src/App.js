import React from "react";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import GlobalStyle from "./styles/globals";


function App() {
  return (
    <>
      <GlobalStyle />
      <section>
        <Home/>
        <Footer />
      </section>
    </>
  );
}

export default App;
