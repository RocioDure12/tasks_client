import { useAppSelector } from "../../hooks";
import { currentUser } from "../slices/authSlice";
import useAuthApi from "../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@mantine/dates";
import MainLayout from "./MainLayout";

export default function Home() {
  const user = useAppSelector(currentUser);
  const authApi = useAuthApi();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="grid gap-10">
        <Calendar className="bg-slate-400 p-5" />
        <div className="bg-gray-600 p-7">otro componente (eventos proximos)</div>
      </div>
    </MainLayout>
  );

  /*const handleLogout=()=>{
    const result= authApi.logout()
    navigate('users/login')
    return result

}*/
}
