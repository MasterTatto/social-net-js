import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";


function App(props) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBarContainer/>


            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile/>}
                       path={'/profile'}/>
                <Route render={() => <DialogsContainer/>}
                       path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>

        </div>

    );
}


export default App;
