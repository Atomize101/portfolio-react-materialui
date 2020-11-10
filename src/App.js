import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/index';
import Resume from './components/Resume';
import CssBaseline from '@material-ui/core/CssBaseline';
import imageUrl from './coffee-apple.jpg';

function App() {
	return (
		<div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
			<>
				<CssBaseline />
				<Route exact path="/" component={Home} />
				<Route path="/resume" component={Resume} />
			</>
		</div>
	);
}

export default App;
