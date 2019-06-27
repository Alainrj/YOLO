import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Target Calories',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2700, 2700, 2700, 2700, 2700, 2700, 2700]
    },
    {
      label: 'Last Week Calories',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(232,64,64,0.4)',
      borderColor: 'rgba(232,64,64,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(232,64,64,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(232,64,64,1)',
      pointHoverBorderColor: 'rgba(232,64,64,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1000, 1500, 1700, 2100, 2000, 2200, 2400]
    },
    {
      label: 'This Week Calories',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(64,87,232,0.4)',
      borderColor: 'rgba(64,87,232,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(64,87,232,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(64,87,232,1)',
      pointHoverBorderColor: 'rgba(64,87,232,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1300, 1500, 1700, 2100, 1900, 2000, 2200]
    }
  ]
};

function LineGraph() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default LineGraph;