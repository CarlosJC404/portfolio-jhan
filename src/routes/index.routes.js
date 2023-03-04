import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.jsx';

export const routes = createBrowserRouter([
    {
        path: '/portfolio-jhan',
        element: <HomePage/>
    }
])