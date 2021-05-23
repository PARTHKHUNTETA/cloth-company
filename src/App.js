import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/shop'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
