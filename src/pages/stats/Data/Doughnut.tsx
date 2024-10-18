import { ChartOptions, plugins } from "chart.js";
import { title } from "process";

const dataDoughnut = {
   labels: ['Likes','Dislikes'],
  datasets: [
    {
      label: 'Reactions',
      data: [30.000,300],
      backgroundColor: [
        'rgba(240, 39, 132, 0.2)',
        'rgba(54, 62, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
    }
  ]
};
let optionsDoghnut:ChartOptions<"doughnut"> = {
  plugins: {
    title: {
      display: true,
      text: 'Reactions', 
        font: {
          size: 20, 
          weight:'normal',
        },
    }
  }
}
export { dataDoughnut,optionsDoghnut };