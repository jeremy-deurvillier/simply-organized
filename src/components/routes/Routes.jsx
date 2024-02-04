import { Route, createRoutesFromElements, createBrowserRouter, Routes, Outlet } from 'react-router-dom'
import Layout from '../layout/Layout'
import Error from '../error/Error'
import Today from '../today/Today'
import Timer from '../timer/Timer'
import Login from '../login/Login'
import SignIn from '../signin/SignIn'
import Profile from '../profile/Profile'

const routes = createRoutesFromElements(<>
    <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Today />} />
        <Route path='/activity/:id/pomodoro' element={<Timer />} />

        <Route path='/profile' element={<Profile />} />
    </Route>
    <Route path='/' element={<div><Outlet /></div>} errorElement={<Error />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
    </Route>
</>)

export default createBrowserRouter(routes)