import { useAppSelector } from "../../hooks";
import { currentUser } from "../slices/authSlice";
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import useAuthApi from "../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";


export default function Home(){
    const user=useAppSelector(currentUser)
    const authApi=useAuthApi()
    const navigate = useNavigate();
    
const handleLogout=()=>{
    const result= authApi.logout()
    navigate('users/login')
    return result

}

const onDateSelect = (date: Dayjs | null) => {
    if (date) {
        navigate(`/taskform`);
    }
};


    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
        
      };


    return(
    <>
        <div>Bienvenido {user?.name}</div>
        <button onClick={handleLogout} style={{ background: '#e6eba9', borderRadius:"10px"}}>Logout</button>
        <Calendar 
        onPanelChange={onPanelChange} 
        onSelect={onDateSelect}
        />
        
    </>
    )
}