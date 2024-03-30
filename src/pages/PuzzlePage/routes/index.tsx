import { Route, Routes } from 'react-router-dom'
import { PuzzlesPage } from '..'
import { TimeTrek } from './TimeTrek'
import { TimeTrivia } from './TimeTrivia'

export const PuzzleRoutes = () => {
  return (
    <Routes>
        <Route path= '/' element = {<PuzzlesPage/>} />
        <Route path = "/heritage/timeTrek" element = {<TimeTrek/>} />
        <Route path = "/heritage/timeTrivia" element = {<TimeTrivia/>} />
    </Routes>
  )
}
