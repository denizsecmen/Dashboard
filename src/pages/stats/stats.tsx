
import React from "react";
import { Bar, Doughnut,Scatter} from "react-chartjs-2";
import styles from './stats.module.css';
import { dataBar, optionsBar,dataLossBar,followersBar } from "./Data/Bar";
import { dataScatter } from './Data/Scatter';
import { dataDoughnut,optionsDoghnut } from "./Data/Doughnut";
import { Chart as ChartJS,ArcElement, CategoryScale, LinearScale,RadarController, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
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
      <div className={styles.scatter}>
        <Scatter data={dataScatter}/>
      </div>
      <div className={styles.lossbar}>
        <Bar data={dataLossBar} options={{}} />
      </div>
      <div className={styles.followers}>
        <Bar data={followersBar} options={{}}/>
      </div>
    </div>
  );
};