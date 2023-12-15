import './Activity.css'

export default function Activity({activity}) {
  return (
    <div className='activity'>
        <p className='activityName'>{activity.name}</p>
        <p className='projectName'>{activity.project.title}</p>
    </div>
  )
}
