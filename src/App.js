import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import AdminView from './components/Admin';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={AdminView} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
