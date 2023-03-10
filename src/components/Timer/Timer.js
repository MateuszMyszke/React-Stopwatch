import styles from './Timer.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import Tc from '../Tc/Tc';


const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  return (
    <div className={styles.timer}>
      <Tc time={time}/>
      
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>       
      
    </div>
  );
};

export default Timer;