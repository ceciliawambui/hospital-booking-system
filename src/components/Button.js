import React, { useState } from 'react';
import axios from 'axios';
const Button = ({ label }) => {
  const [data, setData] = useState('');
  const handleClick = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
      <p data-testid="data">Data: {data}</p>
    </div>
  );
};
export default Button