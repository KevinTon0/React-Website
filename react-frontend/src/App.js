import React, { useEffect, useState } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToSecondPage = () => {
    history.push('/second');
  };

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
      <button onClick={navigateToSecondPage}>Go to Second Page</button>
    </div>
  );
};

export default App;
