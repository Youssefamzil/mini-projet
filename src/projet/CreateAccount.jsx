
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/CreateAccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    nom: '',
    age: '',
    admin: false,
    MotDePasse: '',
    confirmMotDePasse: '',
    pseudo: '',
    prenom: '',
    couleur: '',
    devise: '',
    pays: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    const newErrors = {};

    // Vérification des champs requis
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== 'admin') {
        newErrors[key] = `${key} is required`;
      }
    }

    // Validation du mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(formData.MotDePasse)) {
      newErrors.MotDePasse = 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long';
    }

    // Vérification du mot de passe confirmé
    if (formData.MotDePasse !== formData.confirmMotDePasse) {
      newErrors.confirmMotDePasse = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    console.log('Form Data:', formData); 
    try {
      const response = await axios.post(
        'https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire',
        formData
      );
      console.log('User created:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
          {errors.nom && <p style={{ color: 'red' }}>{errors.nom}</p>}
        </div>

        <div>
          <label>Âge:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>

        <div>
          <label>Pseudo:</label>
          <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} />
          {errors.pseudo && <p style={{ color: 'red' }}>{errors.pseudo}</p>}
        </div>

        <div>
          <label>Prénom:</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
          {errors.prenom && <p style={{ color: 'red' }}>{errors.prenom}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Mot de Passe:</label>
          <input type="password" name="MotDePasse" value={formData.MotDePasse} onChange={handleChange} />
          {errors.MotDePasse && <p style={{ color: 'red' }}>{errors.MotDePasse}</p>}
        </div>

        <div>
          <label>Confirmer Mot de Passe:</label>
          <input type="password" name="confirmMotDePasse" value={formData.confirmMotDePasse} onChange={handleChange} />
          {errors.confirmMotDePasse && <p style={{ color: 'red' }}>{errors.confirmMotDePasse}</p>}
        </div>

        <div>
          <label>Couleur Préférée:</label>
          <input type="text" name="couleur" value={formData.couleur} onChange={handleChange} />
          {errors.couleur && <p style={{ color: 'red' }}>{errors.couleur}</p>}
        </div>

        <div>
          <label>Devise:</label>
          <input type="text" name="devise" value={formData.devise} onChange={handleChange} />
        </div>

        <div>
          <label>Pays:</label>
          <input type="text" name="pays" value={formData.pays} onChange={handleChange} />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="admin"
              checked={formData.admin}
              onChange={handleChange}
            />
            Admin
          </label>
        </div>

        <button type="submit" onChange={handleSubmit}>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;

