import { Routes, BrowserRouter, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import MensajeEnviado from "./pages/MensajeEnviado/MensajeEnviado"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const AppRoutes = () =>{
    return(

        <div style={{margin: '0 20px'}}>
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