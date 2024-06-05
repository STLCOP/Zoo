import React from 'react';
import { Link } from 'react-router-dom';

const AnimalSummary = ({ animal }) => (
  <div className="animal-summary">
    <img src={animal.image} width={200} height={100} />
    <h2>{animal.name}</h2>
    <p>{animal.description.substring(0, 200)}...</p>
    <p><strong>Diet:</strong> {animal.diet}</p>
    <p>
      
      <strong>Group:</strong> 
      <Link to={`/${animal.group.toLowerCase()}`}>{animal.group}</Link>
    </p>
    <Link to={`/animal/${animal.id }`}>Read More</Link>
  </div>
);

export default AnimalSummary;
