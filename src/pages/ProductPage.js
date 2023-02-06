import { useSearchParams } from 'react-router-dom';
import ProductContainer from "../containers/ProductContainer";

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')

    return(
        <ProductContainer search = {search}/>
    );
}

export default ProductPage;