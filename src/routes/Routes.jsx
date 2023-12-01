import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Error from '../components/error/Error'

const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
    }
]

export default createBrowserRouter(routes)