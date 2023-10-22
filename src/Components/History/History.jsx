import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconArchive } from '@tabler/icons-react';
import classes from './History.module.css';

export default function History() {

  const data = [
    {
      title: 'August 2023',
      author: 'Isaac Asimov',
      year: 195100,
      saving: 150000,
      reviews: { positive: 2223, negative: 259 },
      percent : 35,
    },
    {
      title: 'July 2023',
      author: 'Mary Shelley',
      year: 181800,
      saving: 20000,
      reviews: { positive: 5677, negative: 1265 },
      percent : 60,
    },
    {
      title: 'June 2023',
      author: 'Mary Shelley',
      year: 181800,
      saving: 20000,
      reviews: { positive: 5677, negative: 1265 },
      percent : 50,
    },
    
  ];
  const rows = data.map((row) => {

    return (
      <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconArchive  style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
      {row.title}
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
      Total Expense {row.year}
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
      Total Saving {row.saving}
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Expense
        </Text>
        <Text fz="sm" c="dimmed">
        {row.percent}
        </Text>
      </Group>

      <Progress value={row.percent} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">Saved</Text>
        <Badge size="sm">See more</Badge>
      </Group>
    </Paper>
  )});
  return (
    <> 
    <h3>Previous Months History</h3>
    <div className={classes.History}>{rows}</div>

    </>
  );
 
  
}