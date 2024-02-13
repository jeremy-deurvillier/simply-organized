import { Link } from 'react-router-dom'
import { FaPlay, FaPencil, FaTrashCan, FaCheck } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { useEffect, useRef } from 'react'
import './GroupActions.css'

const availablesActions = {
    default: [
        {text: 'Commencer', url: '/user/activity/:id/timer', action: 'confirm', icon: <FaPlay />},
        {text: 'Modifier', url: '/user/activity/:id/edit', action: '', icon: <FaPencil />},
        {text: 'Supprimer', url: '/user/activity/:id/delete', action: 'confirm', icon: <FaTrashCan />},
    ],
    progress: [
        {text: 'Valider', url: '/user/activity/:id/done', action: 'confirm', icon: <FaCheck />},
        {text: 'Annuler', url: '/user/activity/:id/canceled', action: 'confirm', icon: <FaTimes />},
    ]
}

export default function GroupActions({ id, state }) {
    const group = useRef(null)
    const actions = (state.progress) ? availablesActions.progress : availablesActions.default

    /* ** Gestion de la taille du groupe */
    useEffect(
        () => {
            const groupActions = group.current

            const widthMaxi = getComputedStyle(groupActions).getPropertyValue('--width-maxi')
            const widthMini = getComputedStyle(groupActions).getPropertyValue('--width-mini')

            actions.length > 2
                ? groupActions.style.setProperty('--width', widthMaxi)
                : groupActions.style.setProperty('--width', widthMini)
        },
        [actions]
    )

    /* ** Gestion du hover */
    useEffect(
        () => {
            const groupActions = group.current
            const parent = groupActions.parentNode

            const translateXDefault = getComputedStyle(groupActions).getPropertyValue('--translate-x-default')
            const translateXHover = getComputedStyle(groupActions).getPropertyValue('--translate-x-hover')

            parent.addEventListener('mouseenter', e => 
                groupActions.style.setProperty('--transform', translateXHover)
            )
            parent.addEventListener('mouseleave', e => 
                groupActions.style.setProperty('--transform', translateXDefault)
            )
        },
        []
    )

    return (
        <div className='groupActions' ref={group}>
            {
                actions.map(link => {
                    const url = link.url.replace(':id', id)
                    
                    return <Link key={url} to={url}>{link.icon}</Link>
                })
            }
        </div>
    )
}
