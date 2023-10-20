import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './Features.module.css';
  
  const mockdata = [
    {
      title: 'Finance Mastery',
      description:
        'Take control of your financial destiny with intuitive tools and insights.',
      icon: IconGauge,
    },
    {
      title: 'Track your expenses',
      description:
        'Effortlessly monitor every penny you spend, anytime, anywhere.',
      icon: IconUser,
    },
    {
      title: 'Save for your goals',
      description:
        'Achieve your dreams one dollar at a time with smart savings management.',
      icon: IconCookie,
    },
  ];
  
  export default function Features() {
    const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best Tool ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      Unleash the Power of Financial Data
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Achieve the financial equilibrium you've always wanted and work towards a more secure financial future.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}