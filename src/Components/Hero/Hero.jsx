import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '/image.svg';
import classes from './Hero.module.css';
import React from 'react';
import { Navigate } from "react-router-dom";

export default function Hero() {
  const [goToLogin, setGoToLogin] = React.useState(false);

  if (goToLogin) {
    return <Navigate to="/login"/>;
  }
  
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
          Master Your Finances with <span className={classes.highlight}>Assets Flow </span>
          </Title>
          <Text c="dimmed" mt="md">
          Tired of losing track of your finances? With Assets Flow, managing your money becomes a breeze. 
          With our user-friendly platform say goodbye to financial stress and hello to financial clarity!


          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Visualize Your Financial Progress</b> – Keep track of your savings not only expenses.
            </List.Item>
            <List.Item>
              <b>Track Every Penny with Ease</b> – Record cash and cashless expenses.
            </List.Item>
            <List.Item>
              <b> Customize Your Financial Universe </b> – Harmonize Your Spending Across All Life's Essentials.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button onClick={() => {setGoToLogin(true);}} radius="xl" size="md" className={classes.control} >
              Get started
            </Button>
            {/*<Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
          </Button> */}
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}