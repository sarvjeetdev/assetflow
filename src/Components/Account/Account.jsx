import {
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
  } from '@mantine/core';
  import { IconArrowLeft } from '@tabler/icons-react';
  import classes from './Account.module.css';
  
  export default function Account() {
    return (
      <Container size={460} my={30}>
        <Title className={classes.title} ta="center">
          Set your Account
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter details about your income
        </Text>
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your monthly income" placeholder="99999999" required />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                
               
              </Center>
            </Anchor>
            <Button className={classes.control}>Submit</Button>
          </Group>
        </Paper>
        
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your Yearly income" placeholder="99999999" required />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                
               
              </Center>
            </Anchor>
            <Button className={classes.control}>Submit</Button>
          </Group>
        </Paper>

        <Text c="dimmed" fz="sm" ta="center">
          Enter details about your income
        </Text>
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Your Saving Goal per month" placeholder="99999999" required />
          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                
               
              </Center>
            </Anchor>
            <Button className={classes.control}>Submit</Button>
          </Group>
        </Paper>
      </Container>
    );
  }