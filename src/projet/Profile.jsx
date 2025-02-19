
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { nom, prenom, email, couleur } = useSelector(state => state.user);
  console.log(email)
  return (
    <div>
      <h2>Mon Profil</h2>
      <p>Nom: {nom}</p>
      <p>Prénom: {prenom}</p>
      <p>Email: {email}</p>
      <p>Couleur préférée: {couleur}</p>
    </div>
  );
};

export default Profile;
