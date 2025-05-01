import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import MainForm from './forms/MainForm';
import AddMemberForm from './forms/AddMemberForm';
import DaughterForm from './forms/DaughterForm';
import Dashboard from "./components/Dashboard";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main-form" element={<MainForm />} />
        <Route path="/add-member" element={<AddMemberForm />} />
        <Route path="/daughter-form" element={<DaughterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;
