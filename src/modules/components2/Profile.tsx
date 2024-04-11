import React  from "react";
import "../styles/Profile.css"
import "../styles/Card.css"


interface ProfileProps {
    name: string;
    edad: string;
    pais: string;
    src:string;
    alt:string;
}

const Profile: React.FC<ProfileProps> = ({name, edad, pais,src,alt})=> {
    return(
        <div className="card">
        <p>Nombre: {name}</p>
        <p>Edad: {edad}</p>
        <p>Pais origen: {pais}</p>

        <img
        className="profile"
        src={src}
        alt={alt}
        />
        </div>
  
    )
}

export default Profile;