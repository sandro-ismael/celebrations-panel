import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/login';
import { Dashboard } from '../pages/dashboard';
import { PrivateRoutes } from './PrivateRoutes';

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoutes />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}