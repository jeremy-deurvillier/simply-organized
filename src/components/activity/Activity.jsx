import './Activity.css'

export default function Activity({activity}) {
  return (
    <div className='activity'>
        <p>{activity.name}</p>
        <p>{activity.project.title}</p>
    </div>
  )
}
