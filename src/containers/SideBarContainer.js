import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import logo from '../img/Logo_ML.png'
import iconSearch from '../img/ic_Search.png'

const SideBarContainer = () =>{

    const altImgLogo = "Mercado Libre";
    const altIconSearch = "Busqueda";


    const onSendTerm = (term) =>{
        console.log(term);
    }

    return(
        <div className="row justify-content-center">
            <div className="col-1 logoContainer">
                <Logo logo={logo} alt = {altImgLogo}/>
            </div>
            <div className="col-9">
                <SearchBar iconSearch = {iconSearch} alt = {altIconSearch} onHandleClick = {onSendTerm}/>
            </div>
        </div>
    );
}

export default SideBarContainer;