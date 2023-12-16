import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './GroupActions.css'

const availablesActions = {
    default: [
        { text: 'Commencer', url: '/activity/:id/pomodoro', action: 'confirm' },
        { text: 'Modifier', url: '/activity/:id/edit', action: '' },
        { text: 'Supprimer', url: '/activity/:id/delete', action: 'confirm' },
    ],
    progress: [
        { text: 'Valider', url: '/activity/:id/done', action: 'confirm' },
        { text: 'Annuler', url: '/activity/:id/canceled', action: 'confirm' },
    ]
}

export default function GroupActions({ id, state }) {
    const actions = (state.progress) ? availablesActions.progress : availablesActions.default

    useEffect(
        () => {
            const groupActions = document.querySelector('#group_actions_' + id)
            const defaultTransform = getComputedStyle(groupActions).getPropertyValue('--defaultTransform')
            const parent = groupActions.parentNode

            parent.addEventListener('mouseenter', e => groupActions.style = 'transform: translateX(0);')
            parent.addEventListener('mouseleave', e => groupActions.style = defaultTransform)
        },
        []
    )

    return (
        <div className='groupActions' id={'group_actions_' + id}>
            {
                actions.map(link => {
                    const url = link.url.replace(':id', id)
                    
                    return <Link key={url} to={url}>{link.text}</Link>
                })
            }
        </div>
    )
}
