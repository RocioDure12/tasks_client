import { useAppSelector } from "../../hooks";
import { currentUser } from "../slices/authSlice";
import useAuthApi from "../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import { Calendar } from '@mantine/dates';
import MainLayout from "./MainLayout";


export default function Home(){
    const user=useAppSelector(currentUser)
    const authApi=useAuthApi()
    const navigate = useNavigate();

    return (
        <MainLayout>
             <Calendar/>
        </MainLayout>
      )

    


    
/*const handleLogout=()=>{
    const result= authApi.logout()
    navigate('users/login')
    return result

}*/
 
}