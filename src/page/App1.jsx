import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";

export default function App1 (){
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Layout/>}>
                <Route index element={< Home/>}></Route>
                <Route path='Blog' element={< Blog/>}></Route>
                <Route path='Contact' element={< Contact/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
     );
}