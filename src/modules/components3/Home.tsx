import { useAppSelector } from "../../hooks"
import { currentUser} from "../slicers/authSlice"

export default function Home(){
    const user=useAppSelector(currentUser)

    return(
        <div>Bienvenido {user?.name} </div>
    )
}