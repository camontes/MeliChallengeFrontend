import DescriptionProduct from "./DescriptionProduct";

const ProductDetail = ({productDetail}) =>{

    console.log(productDetail);
    return (
        <>
            <div className="row justify-content-center containerDetail">
                <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 colsDetail">
                    <img className="imgDetailHuge img-fluid" src={productDetail.picture} alt={productDetail.title}/>
                </div>
                <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 colsDetail">
                    <p className="newDetail">
                        {productDetail.condition} - {productDetail.sold_quantity} sold
                    </p>
                    <p className="titleDetail">
                        {productDetail.item.title}
                    </p>
                    <p className="priceDetail">
                        {productDetail.item.price.currency} {new Intl.NumberFormat('de-DE').format(productDetail.item.price.amount)}
                    </p>
                    <button className="btn btn-primary btnComprar">Comprar</button>
                </div>
                <DescriptionProduct description={productDetail.description}/>
            </div>
        </>
    )
}

export default ProductDetail;