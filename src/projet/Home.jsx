import React from 'react';



const Home = ({ nom, prenom }) => {
  
  return (
    <div>
    <h1>Bonjour, {prenom} {nom}</h1>
  </div>
  );
};

export default Home;