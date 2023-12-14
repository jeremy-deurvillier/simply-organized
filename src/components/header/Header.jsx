import { DateTime } from 'luxon'
import './Header.css'

export default function Header() {
    const date = DateTime.now()
    const today = date.setLocale("fr").toLocaleString((DateTime.DATE_MED_WITH_WEEKDAY))
    const hour = date.setLocale("fr").toLocaleString((DateTime.TIME_24_SIMPLE))
    // TODO : setState for date

    return (
        <header className='header'>
            <div>
                <p className='datetime'>
                    {today}
                    <span className='hour'>{hour}</span>
                </p>
            </div>
            <div className='notificationIconWrapper'></div>
        </header>
    )
}
