import React, {useContext, useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom' ;
import {PizzasContext} from '../context/PizzasContext'
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {setUser} = useContext(PizzasContext);
    
    useEffect(() => {
        localStorage.getItem('pizzatoken')? setUser(jwtDecode(localStorage.getItem('pizzatoken'))) : setUser(null)
    },[setUser])

    return (
         localStorage.getItem('pizzatoken') ? <Route {...rest} render={
            props => <Component {...rest} {...props} /> 
        } /> : <Redirect to="/login" />
    )
}

export default ProtectedRoute ;
