import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import AddUser from './pages/Home/AddUser.jsx';
import UpdateUser from './pages/Home/UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/adduser',
        element: <AddUser></AddUser>
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-12'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
