import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bniladridas/repos');
        const data = await response.json();
        const languages = {};

        data.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        setChartData({
          labels: Object.keys(languages),
          datasets: [
            {
              label: 'Repositories by Language',
              data: Object.values(languages),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(173, 216, 230, 0.5), rgba(255, 182, 193, 0.5))',
      backdropFilter: 'blur(10px)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '4rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}>Full Stack Developer</h1>
      {loading ? (
        <p>Loading chart data...</p>
      ) : (
        chartData.labels.length > 0 ? (
          <Bar 
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'GitHub Language Usage'
                }
              }
            }}
          />
        ) : (
          <p>No language data available.</p>
        )
      )}
    </div>
  );
}
