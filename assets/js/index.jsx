import React from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Dashboard from './components/dashboard.jsx'
import Data from './components/data.jsx'
import Profile from './components/profile.jsx'
import Runs from './components/runs.jsx'

const { render } = ReactDOM

class Main extends React.Component {
  render() {
    return (
      setupRoutes()
    )
  }
}

function setupRoutes() {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className='header'>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'><NavLink to='/'>Home</NavLink></button>
          <li><NavLink to='/data'>Data</NavLink></li>
          <li><NavLink to='/runs'>Runs</NavLink></li>
          <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
        <div className='content'>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/data' component={Data}/>
          <Route path='/runs' component={Runs}/>
          <Route path='/profile' component={Profile}/>
        </div>
      </div>
    </HashRouter>
  )
}

render (<Main />, document.getElementById('react-container'))