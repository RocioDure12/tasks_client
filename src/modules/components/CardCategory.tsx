import { Card, Text,  Group, RingProgress, Flex} from '@mantine/core';
import "./RingProgress"
import { useMantineTheme } from "@mantine/core";

interface CardCategoryProps{
  progressValue:number
  title:string
  className?:string;
}

export default function CardCategory(props:CardCategoryProps) {
  const theme = useMantineTheme(); //
  return (
    <Card w={120} bg={'#dedfff'} shadow="sm" padding="lg" radius="md" withBorder>
       
        
        <Card.Section >
        <Flex justify="center" align="center" style={{ padding: '10px' }}>
            <RingProgress size={100} sections={[{ value: props.progressValue,color: theme.colors.primary[6]  }]}
            label={
              <Text size="sm" fw={700} ta="center">
                {props.progressValue}%
              </Text>
            }
            ></RingProgress>
        </Flex>
        <Group justify="center" mt="md" mb="xs">
            <Text ta="center" p={'xs'} fw={400}>{props.title}</Text>
        </Group>
       
      </Card.Section>

    
    </Card>
  );
}