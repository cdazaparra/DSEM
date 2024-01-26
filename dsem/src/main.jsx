// Librerias de React
import React from 'react'
// Espacio que se va encargar de cargar todo lo que vamos a mostrar
import ReactDOM from 'react-dom/client'
// Esto sirve para saber el lugar a dónde podemos ir
import { RouterProvider } from "react-router-dom";
// Esto sirve para cargar las rutas
import router from './routes/router';


// Busca al elemento root y dentro de el carga todo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
