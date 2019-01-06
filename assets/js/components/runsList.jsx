import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'


class RunsList extends Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
          <ToolBar>
            <Typography variant='title' color='inherit'>
              Bioreactor Controller App
            </Typography>
          </ToolBar>
        </AppBar>
      </div>
    )
  }
}

export default RunsList