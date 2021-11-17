// import { Route, Router, Routes,} from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import MyProduct from './pages/MyProduct';
import Settings from './pages/Settings';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/transaction' component={Transaction} />
          <Route path='/myproduct' component={MyProduct} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
