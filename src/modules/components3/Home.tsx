import { useAppSelector } from "../../hooks";
import { currentUser} from "../slicers/authSlice";
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';


export default function Home(){
    const user=useAppSelector(currentUser)
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };


    return(
    <>
        <div>Bienvenido {user?.name}</div>
        <Calendar onPanelChange={onPanelChange} />;
    </>
    )
}