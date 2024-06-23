import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
    )
}