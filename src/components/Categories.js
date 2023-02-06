import Category from "./Category";


const Categories = ({categories}) => {

    console.log(categories);
    return (
        <div className="col-lg-10 offset-lg-1 offset-md-1 containerCategories">
            <Category categories={categories}/>
        </div>
    );
}

export default Categories;
