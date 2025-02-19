import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { login } from './redux/UserSlice';
import { Link } from 'react-router-dom';
import './css/login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    pseudo: '',
    MotDePasse: ''
  });
  const [errors, setErrors] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
  //   return regex.test(password);
  // };

  const validateForm = () => {
    const validationErrors = [];

    if (!credentials.pseudo) {
      validationErrors.push("Le nom d'utilisateur est requis.");
    }
    if (!credentials.MotDePasse) {
      validationErrors.push('Le mot de passe est requis.');
    // } else if (!validatePassword(credentials.MotDePasse)) {
    //   validationErrors.push(
    //     'Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une minuscule, un chiffre et un caractère spécial.'
    //   );
    }

    return validationErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        'https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire',
        {
          params: {
            pseudo: credentials.pseudo,
            MotDePasse: credentials.MotDePasse,
          },
        }
      );

      if (response.data.length === 0) {
        setErrors(["Nom d'utilisateur ou mot de passe incorrect."]);
        setAttempts((prevAttempts) => prevAttempts + 1);
      } else {
        const user = response.data[0]; 
        dispatch(login(user)); 
        setErrors([]);
        navigate('/layout');
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error);
      setErrors(['Une erreur est survenue lors de l\'authentification.']);
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = attempts >= 3 || loading;

  return (
    <div id='body'>
    <div id='container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div id='nom'>
          <label htmlFor="pseudo">Nom d'utilisateur</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            value={credentials.pseudo}
            onChange={handleInputChange}
            autoComplete="username"
            required
          />
        </div>
        <div id='mp'>
          <label htmlFor="MotDePasse">Mot de passe</label>
          <input
            type="password"
            id="MotDePasse"
            name="MotDePasse"
            value={credentials.MotDePasse}
            onChange={handleInputChange}
            autoComplete="current-password"
            required
          />
        </div>
        <button id='login' type="submit" disabled={isButtonDisabled}>
          {loading ? 'Chargement...' : 'Login'}
        </button>
      </form>

      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}

      {isButtonDisabled && attempts >= 3 && (
        <p style={{ color: 'red' }}>
          Trop de tentatives échouées. Veuillez réessayer plus tard.
        </p>
      )}

      <div>
        <p>
          Vous n'avez pas de compte? <Link to="/create-account" id='a'>Créer un compte</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;



