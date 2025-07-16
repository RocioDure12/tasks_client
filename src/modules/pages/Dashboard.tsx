import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

import useTaskApi from "../hooks/useTaskApi";
import Task from "../models/Task";
import { Button } from "../components/Button";
import Category from "../models/Category";
import useCategoryApi from "../hooks/useCategoriesApi";
import '@mantine/core/styles.css';
import { Paper, Title, Text , useMantineTheme, } from '@mantine/core';
import {Pagination} from "../components/Pagination"

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);
  const [taskProgressValue, setTaskProgressValue] = useState<number>(0);
  const [tasksDates, setTasksDates] = useState<string[]>([]);

  const navigate = useNavigate();
  const taskApi = useTaskApi();
  const categoriesApi = useCategoryApi();
  const theme = useMantineTheme();

  useEffect(() => {
    getCategories();
    get_task_count();
    get_tasks_dates();
  }, []);


  const get_tasks_dates = async () => {
  const result = await taskApi.get_dates_for_calendar();
  if (result.data) {
    setTasksDates(result.data);
    console.log(tasksDates)
  } else {
    console.log("Error al obtener las fechas");
  }
};


  const getCategories = async () => {
    const result = await categoriesApi.readMyCategories();
    if (result.data) {
      setCategories(result.data);
    } else {
      console.log("Error al obtener categorias");
    }
  };

  const get_task_count = async () => {
    const result = await taskApi.count_tasks();
    if (result.data) {
      setNumberOfTasks(result.data);
      console.log("contador de", result.data);
    } else {
      console.log("No existen tareas");
    }
  };

  const getCompletionPercentage = async () => {
    const result = await taskApi.calculate_percentage_tasks_completed();
    if (result.data) {
      setTaskProgressValue(result.data);
      console.log(result.data);
    } else {
      console.log("Error al calcular porcentaje de tareas completadas");
    }
  };

  const handleAddTask = () => {
    navigate(`/taskform`);
  };

  return (
    <MainLayout>
      {numberOfTasks > 0 ? (
        <div className="grid gap-10">
          <div>
            <DatePickerInput
              placeholder="Filter by date"
              valueFormat="YYYY MMM DD"
              onChange={(date) => {
                if (date) {
                  navigate(`/list/${dayjs(date).format('DD-MM-YYYY')}`);
                }
              }}
              renderDay={(date) => {
                const day = date.getDate();
                const dateString = dayjs(date).format('YYYY-MM-DD');
                const hasTask = tasksDates.includes(dateString);

                return (
                  <div style={{ position: 'relative', width: 36, height: 36 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {day}
                    </div>
                    {hasTask && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor:theme.colors.primary[6],
                        }}
                      />
                    )}
                  </div>
                );
              }}
            />
          </div>

          <Button onClick={handleAddTask}>Add Task</Button>
          <Pagination currentPage={1} totalPages={10}></Pagination>
        </div>
      ) : (
        <div>
          <div>¡Bienvenido/a!</div>
          <div>Comienza a crear tareas</div>
          <Button onClick={handleAddTask}>Add Task</Button>
         
        </div>
      )}
    </MainLayout>
  );
}
