import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Home / Admin
import Login from './pages/admin/login'

// LADING
import Lading from './pages/user/home'

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Lading />} />
        <Route path='/admin/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}
