let dataBarFollowers = {
   labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Followers Bar Chart',
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
let dataLossBar = {
   labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Followers Loss Bar Chart',
      data: [10, 5, 15, 8, 4],
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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true, // Set to true if you want the legend
            labels: {
                boxWidth: 0, // This will hide the colored box
                color: 'black', // Set the color of the text
            },
            position: 'top',
        },
    },
};
