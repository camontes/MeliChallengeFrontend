import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import meli from '../api/meli.js'
import Categories from "../components/Categories";
import Spinner from "../components/Spinner.js";
import NoContent from "../components/NoContent.js";

const ProductContainer = ({search}) => {
    const[products, setProducts] = useState(null);
    const[isLoading, setIsloading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        const getData = async () =>{
            setIsloading(true);
            try{
                const data = await  meli.get(`/api/items?q=${search}`);

                setProducts(data.data);
                setIsloading(false);
            }
            catch{
                navigate('/Error');
            }
        }
        getData();
    },[search,navigate]);

    const renderedContent = () =>{

        if(isLoading){
            return <Spinner/>   
        }
        else if(products.items.length === 0){
            return <NoContent data = "There are no results to show"/>
        }
        return <Categories/>;
    }

    console.log(products);
    return (
        renderedContent()
    );
}

export default ProductContainer;