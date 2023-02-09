import { setFormat } from "../Util/format";

const Product = ({product, shipping,onHandleClick}) => {

    const {id} = product;

    const setAmount = (amount) => {
        return setFormat(amount);
    }

    return (
        <>
            <div className="col-lg-2 col-md-3 col-xs-4 col-sm-4 colContent contentFirst" onClick={() => onHandleClick(id)}>
                <img className="miniImgProduct img-fluid" src={product.picture} alt={product.title}/>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-4 col-sm-4 colContent priceInfo" onClick={() => onHandleClick(id)}>
                <div className="d-inline-flex">
                    <p className="price">
                        {product.price.currency} {setAmount(product.price.amount)}
                        &nbsp;&nbsp;
                        {product.free_shipping && (<img src={shipping} alt={product.title}/>)}
                    </p>
                    
                </div>
                <p className="title">{product.title}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 colContent author">
                {product.author.name}
            </div>
        </>
    );
}

export default Product;