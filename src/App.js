import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import Login from "./components/login/login";

function App() {
    const auth = useSelector((state) => {
        return state.auth
    })
    console.log(auth.inAuth)
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>


            <NavBarContainer/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>

                <Route render={() => <Login/>} path={'/login'}/>


            </div>


        </div>
    );
}

export default App;
