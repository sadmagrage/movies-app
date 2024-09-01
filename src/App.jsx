import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <Login /> } />
            </Routes>
        </BrowserRouter>
    )
}