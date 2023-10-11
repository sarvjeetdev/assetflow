import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import classes from './Banner.module.css';
import ExtraCard from '../ExtraCard/ExtraCard'
import Transaction from '../Transaction/Transaction.jsx'


export default function Banner() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fully featured
          </Text>{' '}
          React components and hooks library
        </h1>

        

        <Group className={classes.controls}>
          {/*<Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
  </Button>*/}

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>

          
          
        </Group>
       <div id='target'> 
       <ExtraCard className="target2"/>
       </div>
      

     



      
      </Container>


      
     
      
      
    </div>
  );
}