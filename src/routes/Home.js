import React, {useContext} from 'react'
import PizzaList from '../components/PizzasList'
import {PizzasContext} from '../context/PizzasContext'




export default function Home() {
    const {message, user} = useContext(PizzasContext);
    
    

    return (
        <div>
            {message ? <div className="alert alert-success">{message}</div> : null}
            <h1>Home Page</h1>
            {user?<h2>Bienvenue {user.email}</h2> :null}
            
            <PizzaList />
           {/*  <Autolist/> */}

        </div>
    )
}
