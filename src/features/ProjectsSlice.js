import { createSlice } from '@reduxjs/toolkit'

// TODO : add list property on Project entity

const activities = [
    { id: 1, name: 'Fix page Report', state: { done: false, progress: false }, project: null },
    { id: 2, name: 'Update chart report', state: { done: false, progress: true }, project: null },
    { id: 3, name: 'Eau', state: { done: false, progress: false }, project: null },
    { id: 4, name: 'Pain', state: { done: false, progress: true }, project: null },
    { id: 5, name: 'Confiture', state: { done: false, progress: false }, project: null },
]

const projects = [
    { id: 1, title: 'Finir PSI', description: '', activities: [activities[0], activities[1]] },
    { id: 2, title: 'Courses', description: '', activities: [activities[2], activities[3], activities[4]] },
    { id: 3, title: 'Appeler papa', description: '17h, Réunion', activities: [] }
]

export const projectsSlice = createSlice({
    name: 'projectsSlice',
    initialState: {
        list: projects,
    },
    reducers: {
        getProjects: (state, action) => {
            // get Collection from database
            return state.list = action.payload
        },
        getProjectById: (state, action) => {
            return state.list.filter((project) => project.activities.includes(action.payload))
        },
        getActivityById: (state, action) => {
            let r = activities.filter(activity => activity.id === new Number(action.payload))
            console.log(action.payload);
            return r
        }
    }
})

export const { getProjects, getProjectById, getActivityById } = projectsSlice.actions

export default projectsSlice.reducer