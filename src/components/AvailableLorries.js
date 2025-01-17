import React, { useState, useEffect } from 'react';

const AvailableLorries = () => {
  const [lorries, setLorries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lorryData = localStorage.getItem('lorries');
    if (lorryData) {
      try {
        const parsedData = JSON.parse(lorryData);
        setLorries(parsedData);
      } catch (error) {
        setError('Error parsing lorry data');
      }
    } else {
      setLorries([]);
    }
  }, []);

  return (
    <div className="lorry-list-container">
      <h2>Available Lorries</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="lorry-list">
          {lorries.map((lorry, index) => (
            <li key={index} className={`lorry-item ${lorry.available ? 'available' : 'unavailable'}`}>
              <div>
                <h3>{lorry.type}</h3>
                <p>Capacity: {lorry.capacity}</p>
                <p>Status: {lorry.available ? 'Available' : 'Unavailable'}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableLorries;

