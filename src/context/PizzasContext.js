import React, {useState, createContext} from 'react';

export const PizzasContext = createContext();

export const PizzasContextProvider = (props) => {
    const [pizzas, setPizzas] = useState([]);
    const [search, setSearch] = useState("");
    const [token, setToken] = useState("");
    const [user, setUser] = useState(false);
    
    const [selectedPizza, setSelectedPizza] = useState(null)
    const [message, setMessage] = useState(null)

    const addPizzas = (pizza) => {
        setPizzas([...pizzas, pizza]);
    }
    

    return (
        <PizzasContext.Provider value={{pizzas, setPizzas, addPizzas, search, setSearch, selectedPizza, setSelectedPizza, message, setMessage, token, setToken, user, setUser}}>
            {props.children}
        </PizzasContext.Provider>
    );
}