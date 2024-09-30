import { useAppSelector } from "../../hooks";
import { currentUser } from "../slices/authSlice";
import useAuthApi from "../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@mantine/dates";
import MainLayout from "../components/MainLayout";
import { Card } from "../components/Card"

export default function Home() {
  const user = useAppSelector(currentUser);
  const authApi = useAuthApi();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="grid gap-10" >
        <Calendar className="bg-primary-200 p-5 rounded-lg text-sm shadow" />
        <Card>Tareas para el dia de hoy</Card>
      </div>
    </MainLayout>
  );

  /*const handleLogout=()=>{
    const result= authApi.logout()
    navigate('users/login')
    return result

}*/
}
