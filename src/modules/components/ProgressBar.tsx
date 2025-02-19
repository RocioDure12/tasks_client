import { Progress, Text } from "@mantine/core";
import { ProgressBarProps } from "../models/ProgressBarProps";
import { useMantineTheme } from "@mantine/core";

export default function ProgressBar(props: ProgressBarProps) {
  const theme = useMantineTheme();

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Progress
        value={props.progress}
        size={30}
        color={theme.colors.primary[9]} // Color de la barra
        radius="xl"
      />
      <Text
        size="sm"
        fw={700}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: theme.colors.neutralScale[9], // Color del texto
        }}
      >
        {props.progress}%
      </Text>
    </div>
  );
}
