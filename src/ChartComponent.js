import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartComponent = () => {
  return (
    <div>
        <h2 className = "chartTitle">
          Bar Chart
        </h2>
    <Bar data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Sales in Millions',
            data: [12, 9, 15, 8, 21, 3],
            backgroundColor: [
              'purple',
            ],
            borderColor: [
                'red'
            ],
            borderWidth: 2,
          },
          {
            label: "Quantity of Units Sold",
            data: [20, 50, 30, 50, 60, 30],
            backgroundColor: [
              'blue'
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 2,
          }
        ],
      }}
            height = {300}
            width = {300}
            options = {{
                maintainAspectRatio: true,
                layout: {
                    padding: 20,
                  }
            }}
   />

        <h2 className = "chartTitle">
          Line Chart
        </h2>
    <Line data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Monthly Returns',
            data: [12, 24, 18, 10, 9, 5],
            backgroundColor: [
              'red'
            ],
            borderColor: [
              'red',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
          {
            label: "Monthly Exchanges",
            data: [11, 12, 6, 8, 5, 10],
            backgroundColor: [
              'magenta',
            ],
            borderColor: [
              'magenta',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
          {
            label: "Monthly BuyBacks",
            data: [3, 2, 5, 6, 2, 9],
            backgroundColor: [
              'blue',
            ],
            borderColor: [
              'blue',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
        ],
      }}
      height = {300}
      width = {300}
      options = {{
        maintainAspectRatio: true,
        layout: {
            padding: 20,
          }
      }}
    />

        <h2 className = "chartTitle">
          Pie Chart
        </h2>
    <Pie data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Sales in Millions',
            data: [12, 7, 18, 4, 43, 31],
            backgroundColor: [
              'purple',
              'blue',
              'red',
              'yellow',
              'orange',
              'cyan',
            ],
          },
        ],
      }}
      height = {300}
      width = {300}
      options = {{
        maintainAspectRatio: true,
        layout: {
            padding: 20,
          }
      }}
    />
    </div>
  )
 }

export default ChartComponent;
