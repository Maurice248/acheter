// import { Route, Router, Routes,} from 'react-router';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import MyProduct from './pages/MyProduct';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';
import Cart from './pages/components/Cart/Cart';
import Details from './pages/components/Details';
import Default from './pages/components/Default';
import Modal from './pages/components/Modal';


class App extends React.Component{

  state = {
    isLog: false
  }

  handleLogin = (isLog) => this.setState({isLog})

  render(){
    const {isLog} = this.state
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => !isLog ? <Login isLogin={this.handleLogin}/> : <Home/>} />
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Home} />
            <Route path='/transaction' component={Transaction} />
            <Route path='/myproduct' component={MyProduct} />
            <Route path='/settings' component={Settings} />
            <Route path='/cart' component={Cart} />
            <Route path='/details' component={Details} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </Router>
      </div>
    );
  }
}


export default App;
