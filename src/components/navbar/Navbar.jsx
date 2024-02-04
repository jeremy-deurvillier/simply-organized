import { Link } from 'react-router-dom'
import { FaHouse, FaCalendar, FaTrophy, FaUser } from "react-icons/fa6"
import './Navbar.css'

const links = [
  { text: 'Accueil', url: '/user/today', icon: <FaHouse /> },
  { text: 'Calendrier', url: '/user/calendar', icon: <FaCalendar /> },
  { text: 'Récompenses', url: '/user/rewards', icon: <FaTrophy /> },
  { text: 'Profil', url: '/user', icon: <FaUser /> },
]

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        {
          links.map(link => {
            return (<li key={link.text}>
              <Link to={link.url}>
                {link.icon}
                <span>{link.text}</span>
              </Link>
            </li>)
          })
        }
      </ul>
    </div>
  )
}
