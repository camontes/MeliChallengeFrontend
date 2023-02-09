
const NoContent = ({data}) =>{
    return (
        <div className="alert alert-secondary d-flex justify-content-center" role="alert">
            {data}
        </div>
    );
}

export default NoContent;