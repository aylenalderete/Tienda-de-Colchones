import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Mayoristas from './components/Mayoristas';
import AdminView from './components/Admin';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Products} />
        <Route exact path='/contacto-mayorista' component={Mayoristas} />
        <Route exact path='/admin' component={AdminView} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
