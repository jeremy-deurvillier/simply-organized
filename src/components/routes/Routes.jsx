import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Error from '../error/Error'
import App from '../app/App'

const routes = createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<App />} />
    </Route>
)

export default createBrowserRouter(routes)