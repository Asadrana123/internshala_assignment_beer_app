import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './App.css'
const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
      setBeers(response.data);
    });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center mt-4">Beer App</h1>
      <div className="row center">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            placeholder="Search beers..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-4"
          />
        </div>
      </div>
      <div className="row">
        {filteredBeers.map((beer,index) => (
          <div key={index} className="col-md-4">
            <BeerCard beer={beer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
