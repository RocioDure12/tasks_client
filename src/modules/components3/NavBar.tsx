import useCartContext from "../hooks/useCartContext"

export default function NavBar(){
    const cartContext= useCartContext()

    
    return(
        <div className="card">
            <h2>Barra de navegacion "</h2>
            <span>🛒</span>
        </div>
    )
}