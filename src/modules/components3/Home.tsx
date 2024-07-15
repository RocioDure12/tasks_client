import { useEffect } from "react"
import { useAppSelector } from "../../hooks"
import { currentUser} from "../slicers/authSlice"
import axios from "axios"


export default function Home(){
    const user=useAppSelector(currentUser)


    return(
        <div>Bienvenido {user?.name}</div>
    )
}