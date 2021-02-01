import React, {useContext, useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import PizzaFinder from '../apis/PizzaFinder'
import {PizzasContext} from '../context/PizzasContext'

const Login = () => {
    let history = useHistory();
    const {message, setMessage, setToken, setUser} = useContext(PizzasContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorDetails, setErrorDetails] = useState("");
    const [errCode, setErrCode] = useState("");
    
    


    const handleSubmitLogin = async(e) => {
        e.preventDefault()
        
        try {
            const result = await PizzaFinder.post('/users/login', {
                email, 
                password
            })
            setError('');
            setErrCode('');
            if(result.data.pizzatoken){
                localStorage.setItem('pizzatoken',result.data.pizzatoken);
                setToken(result.data.pizzatoken)

                setUser(true)

                setMessage('Vous êtes connecté')
                history.push('/')
            }
            
        } catch (err) {
            console.log(JSON.stringify(err.message.substr(-3)))
            setErrCode(err.message.substr(-3))
            console.log("code", errCode)
            
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {message ? <div className="alert alert-success">{message}</div> : null}
            <div className="mb-2">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="email">Email</label>
                        <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email" placeholder="Email" type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="password">Mot de passe</label>
                        <input value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password" placeholder="Mot de passe" type="password" className="form-control"/>
                    </div>
                    
                </div>
                
                
                <button 
                type="submit"
                onClick={handleSubmitLogin}
                className="btn btn-primary">Submit</button>

            </div>
            <Link to='/register'><button className="btn btn-primary">Go to Register</button></Link>
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
        </div>
    )
}

export default Login