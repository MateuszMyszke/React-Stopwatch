import styles from './Timer.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';


const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState('');
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  return (
    <div className={styles.timer}>
      <div className={styles.numbers}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      
        <Button onClick={() => setRunning(true)}>Start</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>       
      
    </div>
  );
};

export default Timer;