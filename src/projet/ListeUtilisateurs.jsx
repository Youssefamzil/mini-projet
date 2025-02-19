
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DetailsUtilisateur from './DetailsUtilisateur';
import ModifierUtilisateur from './ModifierUtilisateur';

const ListeUtilisateurs = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const response = await axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire');
        setUtilisateurs(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUtilisateurs();
  }, []);

  
  const supprimerUtilisateur = async (id) => {
    try {
      await axios.delete(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`);
      setUtilisateurs(utilisateurs.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Pseudo</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((utilisateur) => (
              <tr key={utilisateur.id}>
                <td>{utilisateur.nom}</td>
                <td>{utilisateur.pseudo}</td>
                <td>{utilisateur.email}</td>
                <td>
                  <Link to={`/details/${utilisateur.id}`}>Détails</Link>
                  <Link to={`/modifier/${utilisateur.id}`}>Modifier</Link>
                  <button onClick={() => supprimerUtilisateur(utilisateur.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListeUtilisateurs;



