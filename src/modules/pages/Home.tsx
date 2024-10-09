import { useNavigate } from "react-router-dom";
import { Calendar } from "@mantine/dates";
import MainLayout from "../components/MainLayout";
import { Card } from "../components/Card"

export default function Home() {

  return (
    <MainLayout>
      <div className="grid gap-10" >
        <Calendar className="bg-primary-200 p-5 rounded-lg text-sm shadow" />
        <Card>Tareas para el dia de hoy</Card>
      </div>
    </MainLayout>
  );


}
