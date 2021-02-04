import React, {useContext, useState} from 'react'
import {PizzasContext} from '../context/PizzasContext'
import PizzaFinder from '../apis/PizzaFinder'
import { useHistory } from 'react-router-dom'

export default function AddPizza() {
    const {addPizzas, token} = useContext(PizzasContext);
    const [name, setName] = useState("Calzone");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("10");
    const [base, setBase] = useState("Tomate");
    const [special, setSpecial] = useState(false);
    const [status, setStatus] = useState("disponible");
    
    
    let history = useHistory();


    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await PizzaFinder.post("/pizzas", {
                name, 
                ingredients : ingredients[0] ? ingredients[0].substr(0,1).toUpperCase() + ingredients.join(', ').substr(1) : "",
                price,
                special,
                base, 
                status
            }, {headers : {
                Authorization: `Bearer ${token}`
            }});
            console.log(response.data.createdPizza)
            addPizzas(response.data.createdPizza);
            history.push('/')
        } catch (err) {
            console.log(err)
        }

    }

    const handleTest = (value) => {
        const checked = ingredients.includes(value);
        //console.log(checked)
        checked ? setIngredients(ingredients.filter((data) => data !== value)) : setIngredients([...ingredients, value])
        
        console.log(ingredients[0] ? ingredients[0].substr(0,1).toUpperCase() + ingredients.join(', ').substr(1) : "")
    }

    return (
        <>
            <div>

                <h1 className="text-center">Add Pizza</h1>
                <p className="text-center">secret page</p>
            </div>
        
            
            <form className="mb-4" action="">
                <div className="row form-row">
                    <div className="col">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input type="text" value={ingredients[0] ? ingredients[0].substr(0,1).toUpperCase() + ingredients.join(', ').substr(1) : ""} onChange={e => setIngredients(e.target.value)} className="form-control" placeholder="Ingrédients"/>
                    </div>
                </div>
                <div className="row form-row">
                    <div className="col">
                        <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="form-control" placeholder="Prix"/>
                    </div>
                    <div className="col">
                        <input type="text" value={base} onChange={e => setBase(e.target.value)} className="form-control" placeholder="Base"/>
                    </div>
                </div>
                <div className="row form-row">
                    <div className="col">
                        <input type="text" value={special} onChange={e => setSpecial(e.target.value)} className="form-control" placeholder="Spéciale ?"/>
                    </div>
                    <div className="col">
                        <input type="text" value={status} onChange={e => setStatus(e.target.value)} className="form-control" placeholder="Disponible"/>
                    </div>
                </div>
                <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="tomate" value="tomate" onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="tomate">Tomate</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox"  id="creme" value="crème" onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="creme">Crème</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="jambon" value="jambon"  onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="jambon">jambon</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="champignon" value="champignons" onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="champignon">Champignons</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="lardons" value="lardons" onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="lardons">Lardons</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" disabled onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" disabled onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" disabled onClick={(e) => handleTest(e.target.value)}/>
  <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>

  {/* <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Example file input</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div> */}
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary col mx-3">Add</button>
            </form>  
            

            
        </>
        
        
    )
}
