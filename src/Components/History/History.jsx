import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import classes from './History.module.css';

export default function History() {

  const data = [
    {
      title: 'Foundation',
      author: 'Isaac Asimov',
      year: 1951,
      reviews: { positive: 2223, negative: 259 },
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      reviews: { positive: 5677, negative: 1265 },
    },
    {
      title: 'Foundation',
      author: 'Isaac Asimov',
      year: 1951,
      reviews: { positive: 2223, negative: 259 },
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      reviews: { positive: 5677, negative: 1265 },
    },{
      title: 'Foundation',
      author: 'Isaac Asimov',
      year: 1951,
      reviews: { positive: 2223, negative: 259 },
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      reviews: { positive: 5677, negative: 1265 },
    },
    
  ];
  const rows = data.map((row) => {

    return (
      <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconSwimming style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
      {row.title}
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        32 km / week
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  )});
  return (
    <> 
    <h3>Previous History</h3>
    <div className={classes.History}>{rows}</div>

    </>
  );
 
  
}