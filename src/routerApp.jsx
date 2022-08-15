import { Route, Routes } from "react-router-dom";

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Housing } from './pages/housing/Housing';
import { Error404 } from './pages/error404/Error404';

export const RouterApp = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
    )
}