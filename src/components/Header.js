import React, {useEffect, useContext} from 'react';
import {PizzasContext} from '../context/PizzasContext'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode';


const Header = () => {
    const {message, setMessage, user, setUser, setToken} = useContext(PizzasContext);

    useEffect(() => {
        setTimeout(() => {
            setMessage('')
          }, 5000);
          //console.log('user', user)
    }, [message, setMessage])

    useEffect(() => {
        if(localStorage.getItem('pizzatoken')) {
            setUser(jwtDecode(localStorage.getItem('pizzatoken')))
            setToken(localStorage.getItem('pizzatoken'))
        } else {
            setUser(null)
        }

    },[setUser, setToken])

    const handleLogOut = () => {
        setUser(null)
        localStorage.removeItem('pizzatoken');
        
    }

    return (
        <div>
            {user? <Link to="/"><button className="btn btn-primary float-right" onClick={handleLogOut}>Déconnecter</button></Link> : <Link to='/login'><button className="btn btn-primary float-right">Login</button></Link>}
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
            {user ? (user.is_admin === true ? <><Link to='/addpizza'><button className="btn btn-primary">Add a Pizza</button></Link>
            <Link to='/ingredients'><button className="btn btn-primary">Ingredients</button></Link></> : null) : null}
        </div>
    )
}

export default Header
