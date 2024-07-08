import { useAppSelector } from "../../hooks"
import { currentUser} from "../slicers/authSlice"

export default function Home(){
    const caca=useAppSelector(currentUser)

    return(
        <div>Bienvenido {caca?.name} </div>
    )
}