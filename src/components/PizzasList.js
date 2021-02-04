import React, {useEffect, useContext, useState, useMemo} from 'react';
import {PizzasContext} from '../context/PizzasContext'
import PizzaFinder from '../apis/PizzaFinder'
import Header from './DataTable/Header'
import Search from './DataTable/Search'
import Pagination from './DataTable/Pagination'
import useFullPageLoader from './hooks/useFullPageLoader'
import { useHistory } from 'react-router-dom';


export default function PizzasList(props) {
    const {user, pizzas, setPizzas, token, setIngredients} = useContext(PizzasContext);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({field:"", order:""});
    const [headers, setHeaders] = useState([
        {name: "Nom", field: "name", sortable:true},
        {name: "Base", field: "base", sortable:true},
        {name: "Ingrédients", field: "ingredients", sortable:true},
        {name: "€", field: "price", sortable:true}
        ])
    let history = useHistory();
    const ITEMS_PER_PAGE = 10;


    
    useEffect(() => {
    
    if(user && user.is_admin === true) {
        setHeaders([...headers, {name: "actions", field: "actions"}])
    }
    // eslint-disable-next-line
}, [user])
useEffect(() => {
    
    const fetchData = async () => {
        showLoader();
        try {
            const fetchPizza = await PizzaFinder.get("/pizzas")
            const fetchIngredients = await PizzaFinder.get("/ingredients")

            //console.log(response.data.Pizza)
            setPizzas(fetchPizza.data.Pizza);
            setIngredients(fetchIngredients.data.Ingredient);
            hideLoader();
        }catch(err) {
            console.log(err)
        }
    }
    
    fetchData()
    // eslint-disable-next-line
    }, [setPizzas])


    const handleDelete =  async (e, id) => {

    console.log(id)
        e.stopPropagation();
        try {
            const response = await PizzaFinder.delete(`/pizzas/${id}`, 
            {headers : {
                Authorization: `Bearer ${token}`
            }});
            setPizzas(pizzas.filter(pizza => {
                return pizza._id !== id
            }))

            
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        history.push(`/pizzas/${id}/update`)
    }


    const handlePizzaSelect = (id) => {
        history.push(`/pizzas/${id}`)
    }

    const pizzaData = useMemo(() => {
        let computedPizzas = pizzas;
        

        if(search){
            computedPizzas = computedPizzas.filter(
                pizza => 
                pizza.name.toLowerCase().includes(search.toLowerCase()) ||
                pizza.base.toLowerCase().includes(search.toLowerCase()) ||
                pizza.ingredients.toLowerCase().includes(search.toLowerCase()) ||
                pizza.price.toString().toLowerCase().includes(search.toLowerCase())
                
            )
            
        }
        setTotalItems(computedPizzas.length);


        //Sorting pizzas
        if(sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedPizzas = computedPizzas.sort(
                (a,b) => 
                reversed * a[sorting.field].localeCompare(b[sorting.field])
            )}


        //Current Page slice
        return computedPizzas.slice(
            (currentPage -1) * ITEMS_PER_PAGE, 
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
    }, [pizzas, currentPage, search, sorting])

    return (
        <div>
           
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination 
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={ page => setCurrentPage(page)}
                            
                            />

                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search 
                            onSearch={(value) => {
                                setSearch(value);
                                setCurrentPage(1)
                            }}
                            />
                        </div>
                    </div>
                </div>


            </div>
            <table className="table table-hover">
                <Header headers={headers} onSorting={(field, order) => setSorting({field, order}) }/>
                <tbody>
                    
                        {pizzaData && pizzaData.map(pizza => {
                            return (
                            <tr onClick={() => handlePizzaSelect(pizza._id)} key={pizza._id}>
                            
                                <td>{pizza.name}</td>
                                <td>{pizza.base}</td>
                                <td>{pizza.ingredients}</td>
                                <td>{pizza.price}</td>
                                {user ? (user.is_admin ? <td className='row'>
                                    <button className="btn btn-warning" onClick={(e) => handleUpdate(e, pizza._id)}>Màj</button>
                                    
                                    <button className="btn btn-danger" onClick={(e) => handleDelete(e, pizza._id)}>Sup</button>
                                </td> : null) : null}

                            </tr>
                            )
                        })}

                    
                    
                </tbody>
            </table>
            {loader}
        </div>
    )
}
