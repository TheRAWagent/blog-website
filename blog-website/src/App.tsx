import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './Layout'

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
              path: '/about',
              element: <div>About</div>,
            },
            {
              path: '/login',
              element: <Login />
            }
          ]
      }])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}



export default App
