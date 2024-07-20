import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>MERN E-Commerce</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
