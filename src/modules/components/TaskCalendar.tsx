// components/TaskCalendar.tsx
import { DatePickerInput } from "@mantine/dates";
import dayjs from "dayjs";
import { Calendar } from "lucide-react";
import { toast } from "react-hot-toast";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";

export interface TaskCalendarProps {
  tasksDates: string[];
  onDateSelected: (date: string) => void;
}

export function TaskCalendar({ tasksDates, onDateSelected }: TaskCalendarProps) {
  const theme = useMantineTheme();

  return (
    <div className=" p-4 bg-primary-400 shadow-lg rounded-lg">
        <div className="flex justify-center p-2">
            <img 
            src="/illustrations/appToDo.svg" alt="Logo" className="w-[100px]"
            />
        </div>
      <DatePickerInput
        classNames={{ input: "w-full" }}
        placeholder="Filter by date"
        valueFormat="YYYY MMM DD"
        rightSection={<Calendar size={20} style={{ color: theme.colors.primary[6] }} />}
        onChange={(date) => {
          if (!date) return;
          const dateString = dayjs(date).format("YYYY-MM-DD");
          const hasTasksOnDate = tasksDates.includes(dateString);

          if (!hasTasksOnDate) {
            toast.error("No existen tareas creadas en esa fecha");
            
            return;
          }
          onDateSelected(dateString);
        }}
        renderDay={(date) => {
          const day = date.getDate();
          const dateString = dayjs(date).format("YYYY-MM-DD");
          const hasTask = tasksDates.includes(dateString);

          return (
            <div style={{ position: "relative", width: 36, height: 36 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {day}
              </div>
              {hasTask && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: theme.colors.primary[6],
                  }}
                />
              )}
            </div>
          );
        }}
      />
    </div>
  );
}
