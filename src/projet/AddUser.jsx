import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/CreateAccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    nom: '',
    age: '',
    admin: false,
    motDePasse: '',
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


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};


    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== 'admin') {
        newErrors[key] = `${key} is required`;
      }
    }


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(formData.motDePasse)) {
      newErrors.motDePasse = 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long';
    }

    
    if (formData.motDePasse !== formData.confirmMotDePasse) {
      newErrors.confirmMotDePasse = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        'https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire',
        formData
      );
      console.log('User created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
    <h2>Ajouter un utilisateur :</h2>
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label>Nom:</label></td>
            <td>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
              {errors.nom && <p style={{ color: 'red' }}>{errors.nom}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Âge:</label></td>
            <td>
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
              {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Pseudo:</label></td>
            <td>
              <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} />
              {errors.pseudo && <p style={{ color: 'red' }}>{errors.pseudo}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Prénom:</label></td>
            <td>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
              {errors.prenom && <p style={{ color: 'red' }}>{errors.prenom}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Mot de Passe:</label></td>
            <td>
              <input type="password" name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
              {errors.motDePasse && <p style={{ color: 'red' }}>{errors.motDePasse}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Confirmer Mot de Passe:</label></td>
            <td>
              <input type="password" name="confirmMotDePasse" value={formData.confirmMotDePasse} onChange={handleChange} />
              {errors.confirmMotDePasse && <p style={{ color: 'red' }}>{errors.confirmMotDePasse}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Couleur Préférée:</label></td>
            <td>
              <input type="text" name="couleur" value={formData.couleur} onChange={handleChange} />
              {errors.couleur && <p style={{ color: 'red' }}>{errors.couleur}</p>}
            </td>
          </tr>
          <tr>
            <td><label>Devise:</label></td>
            <td>
              <input type="text" name="devise" value={formData.devise} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td><label>Pays:</label></td>
            <td>
              <input type="text" name="pays" value={formData.pays} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Admin:</td>
            <td>
              <label>
                <input
                  type="checkbox"
                  name="admin"
                  checked={formData.admin}
                  onChange={handleChange}
                />
                Admin
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Ajouter</button>
    </form>
  </div>
  
  );
};

export default CreateAccount;
