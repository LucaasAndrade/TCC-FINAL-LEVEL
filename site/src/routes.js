import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'

// Home / Admin
import Login from './pages/admin/login';



export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Login Admin / Home Admin*/}
        <Route path='/admin/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}
