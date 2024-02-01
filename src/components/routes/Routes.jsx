import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Error from '../error/Error'
import Today from '../today/Today'
import Timer from '../timer/Timer'

const routes = createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Today />} />
        <Route path='/activity/:id/pomodoro' element={<Timer />} />
    </Route>
)

export default createBrowserRouter(routes)