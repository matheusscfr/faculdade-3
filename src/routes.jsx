import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contatos'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/contatos" element={ <Contato /> }></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes