
import { createSlice } from '@reduxjs/toolkit';


const initialState = JSON.parse(localStorage.getItem('user')) || {
  nom: '',
  age: '',
  admin: false,
  MotDePasse: '',
  pseudo: '',
  prenom: '',
  couleur: '',
  Devise: '',
  Pays: '',
  avatar: '',
  email: '',
  photo: '',
  id: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
     
      const userData = { ...state, ...action.payload };
     
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    },
    logout: (state) => {
      
      localStorage.removeItem('user');
      return initialState;
    },
    updateColor: (state, action) => {
      
      state.couleur = action.payload;
      localStorage.setItem('user', JSON.stringify(state)) 
    }
  }
});

export const { login, logout, updateColor } = userSlice.actions;
export default userSlice.reducer; 

