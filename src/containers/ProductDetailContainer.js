import { useEffect, useState } from "react";
import meli from '../api/meli.js'
import { useNavigate  } from "react-router-dom";
import ProductDetail from "../components/ProductDetail"
import Categories from "../components/Categories.js";
import NoContent from "../components/NoContent.js";
import Spinner from "../components/Spinner.js";

const ProductDetailContainer = ({id}) =>{
    const[productDetail,setProductDetail] = useState({});
    const[isLoading, setIsloading] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        const getProductDetail = async() =>{
            setIsloading(true);
            try{
                const data = await  meli.get(`/api/items/${id}`);

                setProductDetail(data.data);
                setIsloading(false);
            }
            catch{
                navigate('/Error');
            }
        }

        getProductDetail();
    },[id, navigate]);

    const renderedContent = () => {

        if(isLoading){
            return <Spinner />
        }
        else if(!productDetail.item.title){
            return <NoContent data = "No hay resultados para mostrar"/>
        }

        return(
            <>
                <div className="row">
                    <Categories categories = {productDetail.categories}/>
                </div>
                <>
                    <ProductDetail productDetail={productDetail}/>
                </>
            </>
        );
    }

    return(
        renderedContent()
    )
}

export default ProductDetailContainer;