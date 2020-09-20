import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import FriendsContainer from './components/Friends/FriendsContainer';

const App =(props)=> {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsContainer /> }  />
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings /> } />
          <Route path='/users' render={() => <UsersContainer /> } />
          <Route path='/friends' render={() => <FriendsContainer /> } />
          <Route path='/login' render={() => <LoginPage /> } />
        </div>
      </div>
  )
}
export default App;
