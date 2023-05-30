import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/header";
import { GlobalStyles } from "./globalStyles";
import PaginaInicial from "./pages/PaginaIncial";

function AppRoutes() {
    return (
        <BrowserRouter>
            <GlobalStyles />

            <Header/>
            
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;