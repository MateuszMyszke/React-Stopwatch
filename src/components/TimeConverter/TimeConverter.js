import styles from './TimeConverter.module.scss';

const TimeConverter = ({time}) => (
  <div className={styles.numbers}>
    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
  </div>
);  

export default TimeConverter;