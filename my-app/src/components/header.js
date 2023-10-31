// function Header({title, color}){
//     console.log(title)
//     return <h1 style={{color: color}}> {title ? title : "No hay nada"} JSX </h1>
// }

// Nueva estructura de componentes
const Header = ({title, color}) => {
    return <h1 style={{color: color}}> {title ? title : "No hay nada"} React </h1>
}

export default Header;