import { Card, Text,  Group, RingProgress, Flex} from '@mantine/core';
import "./RingProgress"

interface CardCategoryProps{
  color:string;
  progressValue:number
  title:string
}

export default function CardCategory(props:CardCategoryProps) {
  return (
    <Card w={120} bg={'#dedfff'} shadow="sm" padding="lg" radius="md" withBorder>
       
        
        <Card.Section >
        <Flex justify="center" align="center" style={{ padding: '10px' }}>
            <RingProgress size={100} sections={[{ value: props.progressValue, color: props.color }]}
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