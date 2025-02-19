
import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationBar.css';



const NavigationBar = ({ admin }) => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="profile">Voir Mon Profile</Link></li>
        <li><Link to="change-color">Modifier Couleur</Link></li>
        {admin && <li><Link to="list-users">Liste Utilisateurs</Link></li>}
        {admin && <li><Link to="add-user">Ajouter Utilisateur</Link></li>}
      </ul>
    </nav>

    </>
  );
};

export default NavigationBar;
