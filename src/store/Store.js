import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../features/AuthSlice'
import ProjectsReducer from '../features/ProjectsSlice'

export default configureStore({
  reducer: {
    auth: AuthReducer,
    projects: ProjectsReducer
  }
})