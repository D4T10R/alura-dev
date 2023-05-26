import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { GlobalStyles } from "./globalStyles";

function AppRoutes() {
    return (
        <BrowserRouter>
            <GlobalStyles />

            <Header/>
            
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;