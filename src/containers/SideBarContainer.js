import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import logo from '../img/Logo_ML.png'
import iconSearch from '../img/ic_Search.png'

const SideBarContainer = () =>{

    const altImgLogo = "Mercado Libre";
    const altIconSearch = "Busqueda";
    const placeholder = "Nunca dejes de buscar";

    const navigate = useNavigate();

    const onSendTerm = (term) =>{
        navigate(`/items?search=${term}`);
    }

    const handleClick = () =>{
        navigate('/');
    }

    return(
        <div className="row justify-content-center">
            <div className="col-1 logoContainer">
                <Logo logo={logo} alt = {altImgLogo} onClick = {handleClick}/>
            </div>
            <div className="col-9">
                <SearchBar 
                    iconSearch = {iconSearch} 
                    alt = {altIconSearch} 
                    onHandleClick = {onSendTerm}
                    placeholder = {placeholder}
                />
            </div>
        </div>
    );
}

export default SideBarContainer;