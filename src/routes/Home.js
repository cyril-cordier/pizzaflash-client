import React, {useContext, useEffect} from 'react'
import PizzaList from '../components/PizzasList'
//import Autolist from '../components/Autolist'
import {PizzasContext} from '../context/PizzasContext'
import { Link } from 'react-router-dom'




export default function Home() {
    const {message, setMessage, user} = useContext(PizzasContext);
    
    useEffect(() => {
        setTimeout(() => {
            setMessage('')
          }, 2500);
          console.log('user', user)
    }, [message])

    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/login'><button className="btn btn-primary">Go to Login</button></Link>
            {message ? <div className="alert alert-success">{message}</div> : null}
            <PizzaList />
           {/*  <Autolist/> */}

        </div>
    )
}
