import GroupActions from '../group-actions/GroupActions'
import './Activity.css'

export default function Activity({ activity }) {
  return (
    <div className='activity'>
      <p className='activityName'>{activity.name}</p>
      <p className='projectName'>{activity.project.title}</p>
      
      <GroupActions id={activity.id} state={activity.state} />
    </div>
  )
}
