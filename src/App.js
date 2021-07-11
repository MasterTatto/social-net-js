import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App(props) {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <NavBar mes={props.state.dialogsPage.messageData}/>

            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile postsData={props.state.profilePage} dispatch={props.dispatch}/>} path={'/profile'}/>
                <Route render={() => <Dialogs dialogsData={props.state.dialogsPage} dispatch={props.dispatch}/>}
                       path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
                {/*<ProfileInfo/>*/}
                {/*<MessageItem/>*/}
            </div>

        </div>

    );
}


export default App;
