import { useNavigate } from "react-router-dom";
import { Calendar } from "@mantine/dates";
import MainLayout from "../components/MainLayout";
import { Card } from "../components/Card";
import { useState } from "react";
import dayjs from 'dayjs';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    // Si el día ya está seleccionado, lo deseleccionamos
    if (selectedDate && dayjs(date).isSame(selectedDate, 'date')) {
      setSelectedDate(null);
    } else {
      // De lo contrario, seleccionamos el nuevo día
      setSelectedDate(date);
    }
  };

  return (
    <MainLayout>
      <div className="grid gap-10">
        <Calendar
          className="bg-primary-200 p-5 rounded-lg text-sm shadow"
          getDayProps={(date) => ({
            selected: selectedDate ? dayjs(date).isSame(selectedDate, 'date') : false, 
            onClick: () => handleSelect(date),
          })}
        />
        <Card>Tareas para el dia de hoy 
          {selectedDate ?
           (
            <p>Fecha seleccionada: {dayjs(selectedDate).format('DD/MM/YYYY')}</p>
          ) :(<p>No se ha seleccionado ninguna fecha.</p>)}</Card>
      </div>
    </MainLayout>
  );
}