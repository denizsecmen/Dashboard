import styles from './stats.module.css';
import { useRef } from 'react';
import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { dataBar } from './Data/Bar';
import context from '../context/context';
export default function Stats() {
  let bar = useRef<Chart<'bar'>|null>(null);
  useEffect(() => {
      const context = bar.current?.getContext();
      if (bar.current)
      {
        bar.current.destroy();
      }
    bar.current = new Chart(context,dataBar);
    
  },[])
  return (
    <div className={styles.main}>
      <div ref={bar}>
      </div>
    </div>
  );
}