import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<NavBarContainer />

			<div className={'app-wrapper-content'}>
				<Route render={() => <Profile />} path={'/profile'} />
				<Route render={() => <DialogsContainer />} path={'/dialogs'} />
				<Route render={() => <News />} path={'/news'} />
				<Route render={() => <Music />} path={'/music'} />
				<Route render={() => <UsersContainer />} path={'/users'} />
				<Route render={() => <Settings />} path={'/settings'} />
			</div>
		</div>
	);
}

export default App;
