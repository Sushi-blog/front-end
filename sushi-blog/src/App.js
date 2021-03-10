import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import GlobalStyle from './style/globalstyle';
import MainPage from './components/MAIN/main';
import WritePost from './components/WRITEPOST/writePost';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/write/post" component={WritePost}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
