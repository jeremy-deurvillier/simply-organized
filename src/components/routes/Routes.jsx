import { Route, createRoutesFromElements, createBrowserRouter, Routes, Outlet } from 'react-router-dom'
import DiscoveryLayout from '../discovery/Layout'
import Why from '../discovery/Why'
import Goal from '../discovery/Goal'
import CallToAction from '../discovery/CallToAction'
import Error from '../error/Error'
import Login from '../login/Login'
import SignIn from '../signin/SignIn'
import Layout from '../layout/Layout'
import Today from '../today/Today'
import Timer from '../timer/Timer'
import Profile from '../profile/Profile'

const routes = createRoutesFromElements(<>
    <Route path='/' element={<DiscoveryLayout />} errorElement={<Error />}>
        <Route index element={<Why />} />
        <Route path='/goal' element={<Goal /> } />
        <Route path='/cta' element={<CallToAction />} />
    </Route>
    <Route path='/auth' element={<div style={{height: '100vh'}}><Outlet /></div>} errorElement={<Error />}>
        <Route index element={<Login />} />
        <Route path='/auth/new' element={<SignIn />} />
    </Route>
    <Route path='/user' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Profile />} />

        <Route path='/user/today' element={<Today />} />
        <Route path='/user/activity/:id/pomodoro' element={<Timer />} />
    </Route>
</>)

export default createBrowserRouter(routes)