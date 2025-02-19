
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DetailsUtilisateur = () => {
  const { id } = useParams();  // Récupérer l'ID de l'utilisateur à partir de l'URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Détails de l'utilisateur</h2>
      <p><strong>Nom:</strong> {userData.nom}</p>
      <p><strong>Pseudo:</strong> {userData.pseudo}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Âge:</strong> {userData.age}</p>
      <p><strong>Prénom:</strong> {userData.prenom}</p>
      <p><strong>Couleur Préférée:</strong> {userData.couleur}</p>
      <p><strong>Devise:</strong> {userData.devise}</p>
      <p><strong>Pays:</strong> {userData.pays}</p>
      <p><strong>Admin:</strong> {userData.admin ? 'Oui' : 'Non'}</p>

      <p><strong>Mot de Passe:</strong> {userData.MotDePasse}</p>

      <Link to={`/modifier/${id}`}>Modifier les informations</Link>
    </div>
  );
};

export default DetailsUtilisateur;

