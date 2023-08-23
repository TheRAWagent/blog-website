import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './Layout'
import Register from './pages/Register'

function App(): JSX.Element {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children:
          [
            {
              index: true,
              element: <Home />
            },
            {
              path: 'about',
              element: <div>About</div>,
            },
            {
              path: 'login',
              element: <Login />
            },
            {
              path: 'register',
              element: <Register/>
            }
          ]
      }])
  return (
    <RouterProvider router={router}/>
  )
}



export default App
