import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import './Layout.css'

export default function Layout() {
    return (
        <>
            <Header />
            <main className='mainContent'>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}
