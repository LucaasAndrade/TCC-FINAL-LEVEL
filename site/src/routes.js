import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Home / Admin
import Login from './pages/admin/login'
import Cadastrarproduto from './pages/admin/cadastrarproduto';

// Login usuario
import LoginUsuario from './pages//usua/usuario';

// LADING
import Lading from './pages/user/home'

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* área de admin */}
        <Route path='/' element={<Lading />} />
        <Route path='/admin/login' element={<Login />} />

        {/* área do user */}
        <Route path='/admin/cadastrarproduto' element={<Cadastrarproduto />} />

       {/* área do usuario */}
       <Route path= '/usua/usuario' element= {<LoginUsuario />}/>

      </Routes>
    </BrowserRouter>
  )
}
