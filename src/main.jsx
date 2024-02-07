import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/Routes'
import '@radix-ui/themes/styles.css'
import './styles.css' // Thème personnalisé pour Radix UI + autres propriétés CSS communes
import { Theme } from '@radix-ui/themes'
import Store from './store/Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={ Store }>
      <Theme accentColor='orange'>
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  </React.StrictMode>,
)
