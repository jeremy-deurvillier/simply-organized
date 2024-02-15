import { useSelector } from 'react-redux'
import Activity from '../activity/Activity'
import './Today.css'

function activitiesElement(projects) {
    return projects.map(project => {
        if (project.activities.length > 0) {
            return project.activities.map(activity => {
                let activityCopy = { ...activity, project: project }

                return <Activity key={activityCopy.id} activity={activityCopy} />
            })
        } else {
            let activity = {
                id: 'project_' + project.id,
                name: project.title,
                state: { done: false, progress: false },
                project: project
            }

            return <Activity key={activity.id} activity={activity} />
        }
    })
}

export default function Today() {
    const projects = useSelector(state => state.projects.list)
    const activities = activitiesElement(projects)

    return (
        <section className='todayPage'>
            <h2>
                Aujourd'hui
                <span className='badge'>{projects.length}</span>
            </h2>
            <div className='todayContent'>
                {activities}
            </div>
        </section>
    )
}
