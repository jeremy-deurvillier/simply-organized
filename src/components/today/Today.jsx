import './Today.css'

const activities = [
  {id:1, title: 'Mon titre 1', state: {done: false, canceled: false}},
  {id:2, title: 'Mon titre 2', state: {done: false, canceled: false}},
  {id:3, title: 'Mon titre 3', state: {done: false, canceled: false}},
  {id:4, title: 'Mon titre 4', state: {done: false, canceled: false}},
  {id:5, title: 'Mon titre 5', state: {done: false, canceled: false}},

]

export default function Today() {
  return (
    <section className='todayPage'>
        <h1>Simply Organized</h1>
        <h2>
            Aujourd'hui
            <span className='badge'>12</span>
        </h2>
        <div className='todayContent'>
            {
              activities.map(activity => <div key={activity.id}>{activity.title}</div>)
            }
        </div>
    </section>
  )
}
