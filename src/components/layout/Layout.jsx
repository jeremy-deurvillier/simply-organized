import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './Layout.css'

export default function Layout() {
    return (
        <>
            <Header />

            <main className='mainContent'>
                <h1 hidden>Simply Organized</h1>
                
                <Outlet />
            </main>

            <Navbar />
            
            <Footer />
        </>
    )
}
