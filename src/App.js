import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Mayoristas from './components/Mayoristas';
import AdminView from './components/Admin';
import Product from './components/Product';
import Login from './components/Admin/Login';
import { useEffect } from 'react';
import { saveEvent } from './database/analytics';


function App() {
  useEffect(() => saveEvent('Visit'),[])
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/:doc_id'> <Product></Product> </Route>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Products} />
        <Route exact path='/ContactoMayorista' component={Mayoristas} />
        <Route exact path='/admin' component={AdminView} />
        <Route exact path='/producto' component={Product} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
