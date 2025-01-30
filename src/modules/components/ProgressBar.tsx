import { Progress } from '@mantine/core';
import "../models/ProgressBarProps"
import { ProgressBarProps } from '../models/ProgressBarProps';

export default function ProgressBar(props:ProgressBarProps) {
  return (
    <Progress.Root size="xl" radius="xl"
    style={{ width: "100%", height: "30px" }} 
    >
      <Progress.Section value={props.progress} color={props.color}  style={{ borderRadius: "999px" }}>
        <Progress.Label style={{ fontSize: "12px", fontWeight: "bold" }}>{props.progress}%</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}