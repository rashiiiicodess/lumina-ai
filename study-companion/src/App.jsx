import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import MainLayout from './layout/mainlayout.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
