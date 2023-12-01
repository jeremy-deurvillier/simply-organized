import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const routes = [
    {
        path: '/',
        element: <Layout />
    }
]

export default createBrowserRouter(routes)