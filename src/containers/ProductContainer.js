import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import meli from '../api/meli.js'
import Categories from "../components/Categories";
import Spinner from "../components/Spinner.js";
import NoContent from "../components/NoContent.js";
import Products from "../components/Products"
import shipping from '../img/ic_shipping.png';

const ProductContainer = ({search}) => {
    const[products, setProducts] = useState(null);
    const[isLoading, setIsloading] = useState(true);

    const navigate = useNavigate();

    const handleClickProductDetail = (id) => {
        navigate(`/items/${id}`)
    }
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
    },[search, navigate]);

    const renderedContent = () =>{

        if(isLoading){
            return <Spinner/>   
        }
        else if(products.items.length === 0){
            return (
                <NoContent data = "No hay resultados para mostrar"/>
            )
        }
        return (
            <>
                <div className="row">
                    <Categories categories = {products.categories}/>
                </div>
                <>
                    <Products products = {products.items} shipping = {shipping} onHandleClick={handleClickProductDetail}/>
                </>
            </>
        );
    }
    return (
        renderedContent()
    );
}

export default ProductContainer;