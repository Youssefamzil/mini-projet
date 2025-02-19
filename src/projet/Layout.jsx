import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from './redux/UserSlice';
import './css/Layout.css';


const Layout = ({ children }) => {
  const { couleur, admin ,nom ,prenom } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
  };

  return (
    <div style={{ backgroundColor: couleur }}>
      
      <div id='header'>
        <div id="logo">
        <img src="\qlf.png" alt="none" width="30px" height="50px"/>
        </div>
        <h2>{nom} {prenom}</h2>
        <button onClick={handleLogout}>Se Déconnecter</button>
        </div>

   
      <div id='navbar'>
      
        
        <Link to="/layout"  >Accueil </Link>
        <Link to="/layout/profile">Voir Mon Profile</Link>
        <Link to="/layout/change-color">Modifier Couleur</Link>
          {admin &&<Link to="/layout/list-users">Liste Utilisateurs</Link>}
          {admin &&<Link to="/layout/add-user">Ajouter Utilisateur</Link>}
        
      
      </div>
      
      <div id='index'>
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li><Link to="/layout">Accueil</Link></li>
          <li><Link to="/layout/profile">Voir Mon Profile</Link></li>
          <li><Link to="/layout/change-color">Modifier Couleur</Link></li>
          {admin && <li><Link to="/layout/list-users">Liste Utilisateurs</Link></li>}
          {admin && <li><Link to="/layout/add-user">Ajouter Utilisateur</Link></li>}
        </ul>
      </nav>
      </div>



      <div id='main'>
        <Outlet />
        {children}
      </div>

   
      
        <div id='footer'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      
    </div>
  );
};

export default Layout;


