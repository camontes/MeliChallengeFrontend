import { useState } from "react";

const SearchBar = ({iconSearch, alt, onHandleClick,placeholder}) => {
    const[term, setTerm] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        setTerm('');
        onHandleClick(term);
    }
    return(
        <form onSubmit={handleClick}>
            <div className="input-group mb-3">
                <input onChange={(e) => setTerm(e.target.value)} type="text" className="form-control" placeholder={placeholder} value={term} aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2" onClick={handleClick}><img alt={alt} src={iconSearch}/></span>
            </div>
        </form>
    );
}

export default SearchBar;