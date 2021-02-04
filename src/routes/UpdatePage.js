import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import PizzaFinder from '../apis/PizzaFinder'
import {PizzasContext} from '../context/PizzasContext'
import { Link } from 'react-router-dom'

export default function UpdatePage(props) {
    //export default function PizzaDetailPage() {
        const {setUser} = useContext(PizzasContext);
        const {id} = useParams();
        //let history = useHistory();
        //const {restaurants} = useContext(RestaurantsContext);
        const [name, setName] = useState("")
        const [pizzaIngredients, setPizzaIngredients] = useState("")
        
        const handleLogOut = () => {
            setUser(null)
            localStorage.removeItem('pizzatoken');
            
        }

    useEffect(() => {
        const fetchData = async() => {
            const response = await PizzaFinder.get(`/pizzas/${id}`)
            console.log(response.data.Pizza)
            setName(response.data.Pizza.name)
            setPizzaIngredients(response.data.Pizza.ingredients)
            

        }
        fetchData()
        
    }, [id])

        
    return (
        <div>
            <h1 className="text-center">Update Pizza</h1>
            <p className="text-center">secret page</p>
            <Link to="/"><button className="btn btn-primary float-right" onClick={handleLogOut}>Déconnecter</button></Link>
            <Link to="/"><button className="btn btn-primary float-right" >Home</button></Link>
            
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingrédients</label>
                    <input value={pizzaIngredients} onChange={e => setPizzaIngredients(e.target.value)} id="name" type="text" className="form-control"/>
                </div>
                
            </form>
        </div>
    )
}
