import Activity from '../activity/Activity'
import './Today.css'

const projects = [
  {id:1, title: 'Projet 1', description: ''},
  {id:1, title: 'Projet 2', description: ''},
]

const activities = [
  {id:1, name: 'Mon titre 1', state: {done: false, progress: false}, project: projects[0]},
  {id:2, name: 'Mon titre 2', state: {done: false, progress: true}, project: projects[0]},
  {id:3, name: 'Mon titre 3', state: {done: false, progress: false}, project: projects[1]},
  {id:4, name: 'Mon titre 4', state: {done: false, progress: true}, project: projects[1]},
  {id:5, name: 'Mon titre 5', state: {done: false, progress: false}, project: projects[1]},
]

export default function Today() {
  return (
    <section className='todayPage'>
        <h2>
            Aujourd'hui
            <span className='badge'>{activities.length}</span>
        </h2>
        <div className='todayContent'>
            {
              activities.map(activity => <Activity  key={activity.id} activity={activity} />)
            }
        </div>
    </section>
  )
}
