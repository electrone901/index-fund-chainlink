// import { useCallback, useRef, useState } from 'react'
// import styles from '../styles/Home.module.css'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js'
// import { Line } from 'react-chartjs-2'
// import faker from 'faker'

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// export default function ChartGraph() {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   }
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

//   const data = {
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: -5, max: 5 })),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: -5, max: 5 })),

//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   }
//   const [locale, setLocale] = useState('')
//   return <Line options={options} data={data} />
// }

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
}

const labels = ['', '', '', '', '', '', '']

export const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: 'Dataset 2',
      data: [4, 7, 8, 9, 8, 6, 9],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export default function ChartGraph() {
  return <Line data={data} options={options} />
}
