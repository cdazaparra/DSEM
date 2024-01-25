//rafce
// Librerias de React
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
// Páginas
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Information from '../pages/Information';
import Prueba from '../pages/Prueba';
// Componete Base
import Layout from '../layout/Layout';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                errorElement: <NotFound/>,
                children:[
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/information",
                        element: <Information/>
                    },
                    {
                        path: "/prueba",
                        element: <Prueba/>
                    }
                ]
            }
        ]
    }
])

export default router