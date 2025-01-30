import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';

export default function ProgressRing () {
  return (
    <>
      <RingProgress
        sections={[{ value: 10, color: '#6d3dee' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            10
          </Text>
        }
      />
    </>
  );
}