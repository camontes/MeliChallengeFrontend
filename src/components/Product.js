
const Product = ({product, shipping}) => {

    return (
        <>
            <div className="col-lg-2 col-md-3 col-xs-4 col-sm-4 colContent">
                <img className="miniImgProduct" src={product.picture} alt={product.title}/>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-4 col-sm-4 colContent priceInfo">
                <div className="d-inline-flex">
                    <p className="price">
                        {product.price.currency} {new Intl.NumberFormat('de-DE').format(product.price.amount)}
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