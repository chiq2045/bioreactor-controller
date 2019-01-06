import React from 'react'
import { render } from 'react-dom'
// import { Route, NavLink, HashRouter } from 'react-router-dom'
// import Dashboard from './components/dashboard/dashboard.jsx'
// import Data from './components/data/data.jsx'
// import Profile from './components/user/profile.jsx'
// import Runs from './components/runs.jsx'
import NavBar from './components/navBar.jsx'

class Main extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar />
        {/* <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/data'>Data</NavLink></li>
            <li><NavLink to='/runs'>Runs</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li> 
          </ul>
          <div>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/data' component={Data}/>
            <Route path='/runs' component={Runs}/>
            <Route path='/profile' component={Profile}/> 
          </div>
        </div>
        </HashRouter> */}
      </div>
    )
  }
}

render (<Main />, document.getElementById('react-container'))