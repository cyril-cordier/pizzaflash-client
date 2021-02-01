import './App.css';
import { PizzasContextProvider } from './context/PizzasContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import UpdatePage from './routes/UpdatePage';
import PizzaDetailPage from './routes/PizzaDetailPage';

function App() {
  return (
    <PizzasContextProvider>

      <div className='container'>
        <Router>
        
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/pizzas/:id' component={PizzaDetailPage}/>
            <Route exact path='/pizzas/:id/update' component={UpdatePage}/>
            <Route component={Home}/>
          </Switch>
        </Router>
      </div>
    </PizzasContextProvider>
  );
}

export default App;
