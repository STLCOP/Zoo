import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AnimalSummary from '../components/AnimalSummary';
import { animals } from '../data';

const mammals = animals.filter(animal => animal.group === 'Mammal');

const Mammals = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  const handleAnimalClick = (animal) => {
    setActiveAnimal(animal);
  };

  return (
    <div className="mammals-page">

      <Sidebar animals={mammals} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main>
        <h1>Mammals</h1>
        {activeAnimal && <AnimalSummary animal={activeAnimal} />}
      </main>
    </div>
  );
};

export default Mammals;
