import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {UserProvider as UserContextProivder} from './UseContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProivder>
      <App />
    </UserContextProivder>
  </React.StrictMode>,
)
