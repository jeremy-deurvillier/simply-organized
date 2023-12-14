import { Link } from 'react-router-dom'
import './Navbar.css'

const links = [
    {text: 'Home', url: '/', icon: null},
    {text: 'Calendar', url: '/calendar', icon: null},
    {text: 'Rewards', url: '/rewards', icon: null},
    {text: 'Profile', url: '/profile', icon: null},
]

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            {
                links.map(link => <li key={link.text}><Link to={link.url}>{link.text}</Link></li>)
            }
        </ul>
    </div>
  )
}
