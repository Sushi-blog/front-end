import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import GlobalStyle from './style/globalstyle';
import MainPage from './components/MAIN/main';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Route path="/" component={MainPage}/>
      </BrowserRouter>
    </>
  );
}

export default App;
