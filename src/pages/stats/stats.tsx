
import React from "react";
import { Bar } from "react-chartjs-2";
import styles from './stats.module.css';
import { dataBar, optionsBar } from "./Data/Bar";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );
export default function Statistics(){
  return (
    <div className={styles.main}>
      <Bar className={styles.bar} data={dataBar} options={optionsBar} />
    </div>
  );
};