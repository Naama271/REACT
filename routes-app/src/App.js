import './App.css';

import Products from './components/Products';
import Header from './components/Header';
import NotFound from "./components/NotFound";
import Product from './components/Product';

import {BrowserRouter , Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>

<div>
      <BrowserRouter>
        <Header />
       <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route component={NotFound} />
          </Switch >
      </BrowserRouter>
    
      </div>

    </div>
  );
}

export default App;
