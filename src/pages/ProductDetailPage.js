import ProductDetailContainer from "../containers/ProductDetailContainer"
import {useParams } from "react-router-dom"

const ProductDetailPage = () =>{
    let {id} = useParams();

    return(
        <ProductDetailContainer id={id}/>
    );
}

export default ProductDetailPage;