
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModifierUtilisateur = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    pseudo: '',
    email: '',
    age: '',
    prenom: '',
    couleur: '',
    devise: '',
    pays: '',
    admin: false,
    MotDePasse: '',
    confirmMotDePasse: ''
  });

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUtilisateur = async () => {
      try {
        const response = await axios.get(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data for editing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUtilisateur();
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 
  const validateForm = () => {
    const newErrors = {};
   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (formData.MotDePasse && !passwordRegex.test(formData.MotDePasse)) {
      newErrors.MotDePasse = 'Le mot de passe doit contenir au moins une lettre majuscule, une minuscule, un chiffre, un caractère spécial, et être d\'au moins 8 caractères.';
    }

    
    if (formData.MotDePasse !== formData.confirmMotDePasse) {
      newErrors.confirmMotDePasse = 'Les mots de passe ne correspondent pas.';
    }

    
    if (!formData.pseudo) {
      newErrors.pseudo = 'Le pseudo est requis.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      
      await axios.put(
        `https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${id}`,
        formData
      );
      navigate(`/details/${id}`);  
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <form onSubmit={handleSubmit}>
          <h2>Modifier Utilisateur</h2>
          
          
          <div>
            <label>Nom:</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
          </div>

          
          <div>
            <label>Pseudo:</label>
            <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} />
            {errors.pseudo && <p style={{ color: 'red' }}>{errors.pseudo}</p>}
          </div>

          
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
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
            <label>Prénom:</label>
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
          </div>
          
          <div>
            <label>Couleur Préférée:</label>
            <input type="text" name="couleur" value={formData.couleur} onChange={handleChange} />
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

          <button type="submit">Modifier</button>
        </form>
      )}
    </div>
  );
};

export default ModifierUtilisateur;

