interface SaludoProps{
    isAuthenticated:boolean

}

const Saludo: React.FC<SaludoProps> = ({isAuthenticated})=>{
    return(
        <div>
            {isAuthenticated ? <p>Le damos la bienvenida 👋</p> : <p>Debe iniciar sesion 👆</p>}
        </div>
    )

}

export default Saludo;