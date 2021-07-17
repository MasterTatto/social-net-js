import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {logDOM} from "@testing-library/react";
import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {
    console.log(props.state)
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar mes={props.state.dialogsPage.messageData}/>

            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile postsData={props.state.profilePage} dispatch={props.dispatch}/>}
                       path={'/profile'}/>
                <Route render={() => <DialogsContainer store={store}/>}
                       path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>

        </div>

    );
}


export default App;
