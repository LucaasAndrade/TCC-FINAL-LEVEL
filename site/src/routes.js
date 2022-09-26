import { BrowserRouter, Routes, Route } from 'react-router-dom';

// LADING
import Lading from './pages/user/home'

// Área / Admin
import Login from './pages/admin/login'
import Cadastrarproduto from './pages/admin/cadastrarproduto';
import Homeadmin from './pages/admin/home';
import Adminprodutos from './pages/admin/adminprodutos';


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* área de admin */}
        <Route path='/' element={<Lading />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/homeadmin' element={<Homeadmin />} />
        <Route path='/admin/cadastrarproduto' element={<Cadastrarproduto />} />
        <Route path='/admin/produtos' element={<Adminprodutos />} />

        {/* área do user */}


      </Routes>
    </BrowserRouter>
  )
}
