import React, {useState, useEffect, useContext} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PizzaFinder from '../apis/PizzaFinder'
import {PizzasContext} from '../context/PizzasContext'


export default function UpdatePage(props) {
    
        const {token} = useContext(PizzasContext);
        const {id} = useParams();
        let history = useHistory();
        const [name, setName] = useState("")
        const [ingredients, setIngredients] = useState("")
        const [special, setSpecial] = useState("")
        const [price, setPrice] = useState("")
        const [base, setBase] = useState("")
        const [status, setStatus] = useState("")
        
       

    useEffect(() => {
        const fetchData = async() => {
            const response = await PizzaFinder.get(`/pizzas/${id}`)
            console.log(response.data.Pizza)
            setName(response.data.Pizza.name)
            setIngredients(response.data.Pizza.ingredients)
            setPrice(response.data.Pizza.price)
            setBase(response.data.Pizza.base)
            setStatus(response.data.Pizza.status)
            setSpecial(response.data.Pizza.special)
            

        }
        fetchData()
        
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = JSON.stringify(
                [
                {"propName":"name","value":name},
                {"propName":"price","value":price},
                {"propName":"base","value":base},
                {"propName":"special","value":special},
                {"propName":"status","value":status},
                {"propName":"ingredients","value":ingredients}
                ])
        try {
            await PizzaFinder(`/pizzas/${id}`, {
            method: 'patch',
            headers : {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            data : data
        });
        history.push("/");
        } catch (err) {
            console.log(err)
        }
        
                
    }

        
    return (
        <div>
            <h1 className="text-center">Update Pizza</h1>
            <p className="text-center">secret page</p>
            
            <form action="submit">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingrédients</label>
                    <input value={ingredients} onChange={e => setIngredients(e.target.value)} id="ingredients" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Prix</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} id="price" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="base">Base</label>
                    <input value={base} onChange={e => setBase(e.target.value)} id="base" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Statut</label>
                    <input value={status} onChange={e => setStatus(e.target.value)} id="status" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="special">Speciale ?</label>
                    <input value={special} onChange={e => setSpecial(e.target.value)} id="special" type="text" className="form-control"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                <button onClick={() => history.push("/")} className=" btn btn-primary mx-5">Cancel</button>
            </form>
        </div>
    )
}
