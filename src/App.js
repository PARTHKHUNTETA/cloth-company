import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/shop'

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
