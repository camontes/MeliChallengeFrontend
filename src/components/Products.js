import Product from "./Product";

const Products = ({products, shipping,onHandleClick}) =>{

    console.log(products);

    const renderedContent = products.map((p)  => {
        return (
            <div className="row justify-content-center product" key={p.id}>
                <Product product = {p} key={p.id} shipping = {shipping} onHandleClick={onHandleClick}/>
            </div>
        );
    });

    return(
        <>
            {renderedContent}
        </>
    );
}

export default Products;