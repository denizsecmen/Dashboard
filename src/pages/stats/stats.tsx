
import React from "react";
import { Bar, Doughnut} from "react-chartjs-2";
import styles from './stats.module.css';
import { useEffect } from "react";
import { dataBar, optionsBar } from "./Data/Bar";
import { dataDoughnut,optionsDoghnut } from "./Data/Doughnut";
import { Chart as ChartJS,ArcElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
ChartJS.register(CategoryScale,ArcElement, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );
export default function Statistics(){
  return (
    <div className={styles.main}>
      <div className={styles.bar} >
        <Bar data={dataBar} options={{}} />
      </div>
      <div className={styles.doughnut}>
        <Doughnut data={dataDoughnut} options={optionsDoghnut}/>
      </div>
    </div>
  );
};