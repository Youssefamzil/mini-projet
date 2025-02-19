
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './Login';

import Layout from './Layout';

import Profile from './Profile';
import ChangeColor from './ChangeColor';
import ListUsers from './ListeUtilisateurs';
import AddUser from './AddUser';
import Home from './Home';
import DetailsUtilisateur from './DetailsUtilisateur';
import ModifierUtilisateur from './ModifierUtilisateur';


import CreateAccount from './CreateAccount';
import { useSelector } from 'react-redux';


const App = () => {
  const { admin: isAdmin, nom, prenom } = useSelector((state) => state.user);
  return (
  
    <BrowserRouter>
      <Routes>
        {/* Définir la page de Login comme la page principale */}
        <Route path="/" element={<Login />} /> {/* Page principale de connexion */}
        <Route path="/create-account" element={<CreateAccount />} /> {/* Route pour la page de création de compte */}
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home nom={nom} prenom={prenom}  />} />
          <Route path="profile" element={<Profile />} />
          <Route path="change-color" element={<ChangeColor />} />
          {isAdmin && <Route path="list-users" element={<ListUsers />} />}
          {isAdmin && <Route path="add-user" element={<AddUser />} />}
        </Route>
        <Route path="/details/:id" element={<DetailsUtilisateur />} />
        <Route path="/modifier/:id" element={<ModifierUtilisateur />} />
        
      </Routes>
    
    </BrowserRouter>
    
  );
};

export default App;

