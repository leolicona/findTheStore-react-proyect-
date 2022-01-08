import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from '../Containers/Layout';
import Home from '../Pages/Home';
import Perfil from '../Pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
