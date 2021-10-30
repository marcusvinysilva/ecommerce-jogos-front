import React from 'react';
import Home from './Pages/Home'
import GlobalStyle, { ContentWrap } from './styles/styles'

function App() {
  return (
    <>
        <GlobalStyle />
        <ContentWrap>
            <Home />
        </ContentWrap>
    </>
  );
}

export default App;
