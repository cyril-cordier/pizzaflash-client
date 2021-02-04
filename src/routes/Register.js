import React, {useState, useEffect, useContext} from 'react'
import { useHistory, Link } from 'react-router-dom'
import PizzaFinder from '../apis/PizzaFinder'
import {PizzasContext} from '../context/PizzasContext' 

const Register = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorDetails, setErrorDetails] = useState("");
    const [errCode, setErrCode] = useState("");
    const {setMessage} = useContext(PizzasContext);
    

    
    const handleSubmitRegister = async(e) => {
        e.preventDefault()
        try {
            const result = await PizzaFinder.post('/users/register', {
                email, 
                password
            })
            setError('');
            setErrCode('');
            setMessage('Votre compte a bien été créé. Vous pouvez vous connecter.')
            history.push('/login')
            console.log(JSON.stringify(result))
            
        } catch (err) {
            console.log(JSON.stringify(err.message.substr(-3)))
            setErrCode(err.message.substr(-3))
            console.log("code", errCode)
            
            err ? setError('Erreur d\'identifiants ou de mot de passe') : setError('');
        }

    
    }

    useEffect(() => {
        errCode === "500" ? setErrorDetails('L\'identifiant n\'est pas un email') : setErrorDetails('');
        errCode === "409" ? setErrorDetails('L\'adresse email existe déjà') : setErrorDetails('');
    }, [errCode])

    return (
        <div>
            <h1>Register</h1>
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
                
                {errorDetails ? <p className="alert alert-danger">{errorDetails}</p> : ''}
                {error ? <p className="alert alert-danger">{error}</p> : ''}
                <button 
                type="submit"
                onClick={handleSubmitRegister}
                className="btn btn-primary">Submit</button>

            </div>
            <Link to='/login'><button className="btn btn-primary">Go to Login</button></Link>

        </div>
    )
}

export default Register
