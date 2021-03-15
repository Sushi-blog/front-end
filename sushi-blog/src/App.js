import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import GlobalStyle from './style/globalstyle';
import MainPage from './components/MAIN/main';
import WritePost from './components/WRITEPOST/writePost';
import Login from './components/LOGIN/login';
import SignUp from './components/SIGNUP/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/mainpage" component={MainPage}/>
          <Route exact path="/write/post" component={WritePost}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
