
const Logo = ({logo,alt,...rest}) => {
    return (
        <img src ={logo} alt={alt} className="logo" {...rest}/>
    );
}

export default Logo;