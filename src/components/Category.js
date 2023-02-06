
const Category = ({categories}) =>{

    const renderedContent = categories.join(" > ");
    return(
        <p>{renderedContent}</p>
    );
}

export default Category;