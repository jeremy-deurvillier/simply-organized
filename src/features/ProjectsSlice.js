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
        getCollection: (state, action) => {
            // get Collection from database
            state.list = action.payload
        },
        getProject: (state, action) => {
            return state.list.filter((project) => project.activities.includes(action.payload))
        },
        projectByItem: (state, action) => {
            state.list.map((p) => {
                p.activities.map((a) => {
                    a.project = p
                })
            })
        }
    }
})

export const { getCollection, getProject, projectByItem } = projectsSlice.actions

export default projectsSlice.reducer