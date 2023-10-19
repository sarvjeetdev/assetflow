import { Container, Text, Button, Group, TextInput,Select} from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import classes from './Banner.module.css';
import ExtraCard from '../ExtraCard/ExtraCard'
import { useState } from 'react';






export default function Banner() {
  const [focused, setFocused] = useState(false);
  const [Amount, setAmount] = useState('');
  const category = ['React', 'Angular', 'Svelte', 'Vue']
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
           
            size="xl"
            variant="default"
            className={classes.control}
            href='#record'
            
          >
            Record
          </Button>

          
          
          
        </Group>
       <div className={classes.target}>
      
       <ExtraCard className={classes.target2}/>
       
       
       <div className={classes.Record}> 
       <h2><Text id="record" component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit size='xl'> Record Form </Text></h2>
       <TextInput
        placeholder="Amount"
        type="number"
        required  
        value={Amount}
        onChange={(event) => setAmount(event.currentTarget.Amount)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
       />
      
      <Select
        mt="md"
        comboboxProps={{ withinPortal: true }}
        data={category}
        placeholder="Category"
        
        classNames={classes}
      />
      <Button
          
           
            size="sm"
  
            className={classes.submitButton}
            
          >
            Record
          </Button>

      </div>
       
       </div>
      

     


      
      </Container>
      


      
     
      
      
    </div>
  );
}