import React, {useEffect, useContext, useState, useMemo} from 'react';
import {PizzasContext} from '../context/PizzasContext'
import PizzaFinder from '../apis/PizzaFinder'
import Header from './DataTable/Header'
import Search from './DataTable/Search'
import Pagination from './DataTable/Pagination'
import useFullPageLoader from './hooks/useFullPageLoader'


export default function PizzasList(props) {
    const {pizzas, setPizzas} = useContext(PizzasContext);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({field:"", order:""});
    
    const ITEMS_PER_PAGE = 3;


    const headers = [
        {name: "Nom", field: "name", sortable:true},
        {name: "Base", field: "base", sortable:true},
        {name: "Ingrédients", field: "ingredients", sortable:true},
        {name: "€", field: "price", sortable:true}
    ];



    useEffect(() => {

        const fetchData = async () => {
            showLoader();
            try {
                const response = await PizzaFinder.get("/pizzas")
                 //console.log(response.data.Pizza)
                 hideLoader();
                setPizzas(response.data.Pizza);
            }catch(err) {
                console.log(err)
            }
        }

        fetchData()
    }, [setPizzas])


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
            {/* <table className="table table-hover">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Base</th>
                        <th scope="col">Ingrédients</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {pizzas && pizzas.map(pizza => {
                            return (
                            <tr key={pizza._id}>
                            
                                <td>{pizza.name}</td>
                                <td>{pizza.base}</td>
                                <td>{pizza.ingredients.join(', ')}</td>
                                <td>{pizza.price} €</td>

                            </tr>
                            )
                        })}

                    
                    
                </tbody>
            </table> */}
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
                            <tr key={pizza._id}>
                            
                                <td>{pizza.name}</td>
                                <td>{pizza.base}</td>
                                <td>{pizza.ingredients}</td>
                                <td>{pizza.price}</td>

                            </tr>
                            )
                        })}

                    
                    
                </tbody>
            </table>
            {loader}
        </div>
    )
}
