import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './checkout';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    //
    <Router>
      <div className="App">
      <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
        </Switch>
        
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
        
      </div>

    </Router>
    
    
  );
}

export default App;
