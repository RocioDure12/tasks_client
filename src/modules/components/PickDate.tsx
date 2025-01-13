import { PropsWithChildren, useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import '@mantine/core/styles.css';

export function PickDate() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      placeholder="Filter by date"
      value={value}
      onChange={setValue}
    />
  );
}