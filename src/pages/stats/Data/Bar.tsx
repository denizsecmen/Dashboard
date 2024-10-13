let dataBar = {
   labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [40, 50, 30, 60, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const optionsBar = {
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    y: {
      title: {
        display: true,
        text: "Followers",
      },
      display: true,
      beginAtZero: true,
      max: 100,
    },
    x: {
      title: {
        display: true,
        text: "Months",
      },
      display: true,
    },
  },
};
export { dataBar,optionsBar };