import { useSelector } from 'react-redux'
import Activity from '../activity/Activity'
import './Today.css'

/* ** Parcours la liste des projets et récupère les activités.
* 
* @return Array categories Une liste d'activités.
*/
function getActivities(projects) {
    let activities = []

    projects.map(project => {
        if (project.activities.length > 0) {
            project.activities.map(activity => {
                let activityCopy = { ...activity, project: project }

                activities.push(activityCopy)
            })
        } else {
            let activity = {
                id: 'project_' + project.id,
                name: project.title,
                state: { done: false, progress: false },
                project: project
            }

            activities.push(activity)
        }
    })

    return activities
}

export default function Today() {
    const projects = useSelector(state => state.projects.list)
    const activities = getActivities(projects)

    return (
        <section className='todayPage'>
            <h2>
                Aujourd'hui
                <span className='badge'>{activities.length}</span>
            </h2>
            <div className='todayContent'>
                {activities.map(activity => <Activity key={activity.id} activity={activity} />)}
            </div>
        </section>
    )
}
