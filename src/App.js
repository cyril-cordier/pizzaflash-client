import './App.css';
import { PizzasContextProvider } from './context/PizzasContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import UpdatePage from './routes/UpdatePage';
import PizzaDetailPage from './routes/PizzaDetailPage';
import AddPizza from './routes/AddPizza';
import ProtectedRoute from './routes/ProtectedRoute';
import IngredientsList from './components/IngredientsList';
import Header from './components/Header';

function App() {
  return (
    <PizzasContextProvider>

      <div className='container'>
        <Router>
          <Header />
        
          <Switch>
            <Route exact path='/' component={Home}/>
            <ProtectedRoute exact path='/ingredients' component={IngredientsList}/>
            <ProtectedRoute exact path='/addpizza' component={AddPizza}/>
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
