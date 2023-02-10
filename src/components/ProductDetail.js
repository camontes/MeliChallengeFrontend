import DescriptionProduct from "./DescriptionProduct";
import { setFormat } from "../Util/format";

const ProductDetail = ({productDetail}) =>{

    const setAmount = (amount) => {
        return setFormat(amount);
    }

    return (
        <>
            <div className="row justify-content-center containerDetail">
                <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 colsDetail colsD1">
                    <img className="imgDetailHuge img-fluid" src={productDetail.picture} alt={productDetail.title}/>
                </div>
                <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 colsDetail colsD2">
                    <p className="newDetail">
                        {productDetail.condition} - {productDetail.sold_quantity} sold
                    </p>
                    <p className="titleDetail">
                        {productDetail.item.title}
                    </p>
                    <p className="priceDetail">
                        {productDetail.item.price.currency} {setAmount(productDetail.item.price.amount)}
                    </p>
                    <button className="btn btn-primary btnComprar">Comprar</button>
                </div>
                <DescriptionProduct description={productDetail.description}/>
            </div>
        </>
    )
}

export default ProductDetail;