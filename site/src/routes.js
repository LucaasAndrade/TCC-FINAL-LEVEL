import { BrowserRouter, Routes, Route } from 'react-router-dom';

// LADING
import Lading from './pages/user/home'

// Area / usuario
import Login from './pages/user/login'
import CadastrarUsuario from './pages/user/CadastarUsuario/cadastrarUsuario';
import Buscar from './pages/user/buscar'
import Masculino from '../src/pages/user/masculino'

// Area / Admin
import LoginAdmin from './pages/admin/login'
import Homeadmin from './pages/admin/home';
import Cadastrarproduto from './pages/admin/cadastrarproduto';
import Adminprodutos from './pages/admin/adminprodutos';


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* área de admin */}
        <Route path='/' element={<Lading />} />
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/admin/homeadmin' element={<Homeadmin />} />
        <Route path='/admin/cadastrarproduto' element={<Cadastrarproduto />} />
        <Route path='/admin/produtos' element={<Adminprodutos />} />

        {/* área do user */}
        <Route path='/login' element={<Login />} />
        <Route path='/Cadastrar' element = {<CadastrarUsuario />} />
        <Route path='/home' element = {<Lading />} />
        <Route path='/buscar' element = {<Buscar />} />
        <Route path='/masculino' element={<Masculino />} />

      </Routes>
    </BrowserRouter>
  )
}
