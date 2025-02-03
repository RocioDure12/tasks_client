import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { useState } from 'react';

export default function ProgressRing () {
  const [value, setValue] = useState(0);
  return (
    <>
      <RingProgress
        sections={[{ value: 10, color: '#6d3dee' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            {value}
          </Text>
        }
      />
    </>
  );
}