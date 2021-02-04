import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PizzaFinder from '../apis/PizzaFinder'


export default function PizzaDetailPage() {

        const {id} = useParams();
        
        //const {restaurants} = useContext(RestaurantsContext);
        const [name, setName] = useState("")
        const [pizzaIngredients, setPizzaIngredients] = useState("")
        

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
            
            
            <h1 className="text-center">Detail Pizza</h1>
            
            <form action="">
                <div className="form-group">
                    
                    <h2>{name}</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingrédients :</label>
                    <p>{pizzaIngredients}</p>
                </div>
                
            </form>
        </div>
    )
}
