import React, {useState, useContext} from 'react';
import PizzaFinder from '../apis/PizzaFinder'
import { PizzasContext } from '../context/PizzasContext'
    
    const AddIngredient = () => {
    const {addIngredients, token} = useContext(PizzasContext);
    const [name, setName] = useState("test");
    const [base, setBase] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await PizzaFinder.post("/ingredients", {
                name, 
                base
            }, 
            {headers : {
                Authorization: `Bearer ${token}`
            }});
            addIngredients(response.data.createdIngredient);
            
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="mb-4">
            <form action="submit">
                <div className="row form-row">
                    <div className="col">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="name"/>
                    </div>
                    
                    <div className="col">
                        <select 
                        value={base}
                        onChange={e => setBase(e.target.value)}
                        className="form-control mr-sm-2">
                            <option disabled>Base</option>
                            <option value="true">Oui</option>
                            <option value="false">Non</option>
                        </select>
                    </div>
                    
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary col mx-3">Add</button>
                    
                </div>
            </form>  

                      
        </div>
    )
}

export default AddIngredient
