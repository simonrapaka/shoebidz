import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    //
    <Router>
    {/* <Link to='/Home'></Link> */}

    <Routes>
    <Route path='/' element={
      <>
        <Header />
        <Home />
      </>
    } />
    
    <Route path='/checkout' element={
      <>
        <Header />
        <Checkout/>
      </>
    } />

    <Route path='/login' element={
      <>
        <Header />
        <Login />
      </>
    } />
    <Route path='/payment' element={
      <>
        <Header />
        {/* <Elements stripe={promise}>

        </Elements> */}
        <Payment />
      </>
    } />
    {/* <Route path='/login' element={0} /> */}
    {/* <Route path='/checkout' element={<Checkout/>} /> */}
    {/* <Route path='/' element={<Header/>} /> */}
  
    </Routes>
    </Router>
    
    
  );
}

export default App;
