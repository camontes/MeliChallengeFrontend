
const DescriptionProduct =({description}) =>{
    return(
        <>
            <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 productDescription pdesc">
                <p className="titleDescription">Descripción del producto</p>
                <p className="descriptionText">
                    {description}
                </p>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12 productDescription"></div>
        </>
    );
}

export default DescriptionProduct;