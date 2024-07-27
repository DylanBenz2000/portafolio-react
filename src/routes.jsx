import { Routes, BrowserRouter, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import MensajeEnviado from "./pages/MensajeEnviado/MensajeEnviado"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './routes.css'

const AppRoutes = () =>{
    return(

        <div className="container-routes">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/mensaje-enviado" element={<MensajeEnviado />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>

    )
}

export default AppRoutes