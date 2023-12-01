import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/Routes'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Theme accentColor='orange'>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
