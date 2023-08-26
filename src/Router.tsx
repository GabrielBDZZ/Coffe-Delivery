import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home'
import { Cart } from './pages/Cart/Cart'
import { Sucess } from "./pages/Sucess/Sucess";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/sucess" element={<Sucess/>}/>
        </Routes>
    )
}