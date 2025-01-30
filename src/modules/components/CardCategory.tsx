import { Card, Text,  Group, RingProgress, Flex} from '@mantine/core';
import "./RingProgress"

export default function CardCategory() {
  return (
    <Card w={120} bg={'#dedfff'} shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="center" mt="md" mb="xs">
            <Text fw={500}>Category</Text>
        </Group>
        
        <Card.Section >
        <Flex justify="center" align="center" style={{ padding: '10px' }}>
            <RingProgress size={100} sections={[{ value: 70, color: '#6d3dee' }]}></RingProgress>
        </Flex>
       
      </Card.Section>

    
    </Card>
  );
}