import React from 'react'
import Draw from './Draw'
import NewTask from './components/NewTask'
import {BrowserRouter,Route} from 'react-router-dom'
import ViewTasks from './components/ViewTasks'
import IncompleteTasks from './components/IncompleteTasks'
function App() {
  return (
    <div className="row">
      <BrowserRouter>
      <Route exact path="/">
      <Draw/>
      </Route>
      <Route path="/newTask">
      <NewTask/>
      </Route>
      <Route path="/allTask">
      <ViewTasks/>
      </Route>
      <Route path="/pendingTask">
      <IncompleteTasks/>
      </Route>
      </BrowserRouter>    
    </div>
  )
}

export default App
