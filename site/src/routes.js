import { BrowserRouter, Routes, Route } from 'react-router-dom';

// LADING
import Landing from './pages/user/home'

// Area / usuario
import Login from './pages/user/login'
import CadastroUser from './pages/user/cadastroUser'
import Produto from './pages/user/produto'
import Buscar from './pages/user/buscar'
import Destaques from './pages/user/destaques'
import Acessorios from '../src/pages/user/acessorios'
import Masculino from '../src/pages/user/masculino'
import Feminino from '../src/pages/user/feminino'
import Infantil from '../src/pages/user/infantil'

// Area / Admin
import LoginAdmin from './pages/admin/login'
import Homeadmin from './pages/admin/home'
import Cadastrarproduto from './pages/admin/cadastrarproduto'
import ConsultarProduto from './pages/admin/consultarProduto'
import Produtos from './pages/admin/produtos'


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* área de admin */}
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/admin/home' element={<Homeadmin />} />
        <Route path='/admin/cadastrarproduto' element={<Cadastrarproduto />} />
        <Route path='/admin/produtos' element={<Produtos />} />
        <Route path='/admin/buscar/produto' element={<ConsultarProduto />} />

        {/* área do user */}
        <Route path='/home' element = {<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<CadastroUser />} />
        <Route path='/produto' element = {<Produto />} />
        <Route path='/buscar' element = {<Buscar />} />
        <Route path='/destaques' element = {<Destaques />} />
        <Route path='/acessorios' element={<Acessorios />} />
        <Route path='/masculino' element={<Masculino />} />
        <Route path='/feminino' element={<Feminino />} />
        <Route path='/infantil' element={<Infantil />} />

      </Routes>
    </BrowserRouter>
  )
}
