import { useEffect, useState } from "react";
import meli from '../api/meli.js'
import Categories from "../components/Categories";

const ProductContainer = ({search}) => {
    const[products, setProducts] = useState(null);

    useEffect(()=>{
        const getData = async () =>{

            const data = await  meli.get(`/api/items?q=${search}`);

            console.log(data.data);
        }
        getData();
    },[search]);
    return (
        <Categories/>
    );
}

export default ProductContainer;