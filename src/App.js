import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'
import './styles/Global.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/quiz' component={Quiz} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
