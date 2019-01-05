import React, { Component } from 'react'
import { VictoryChart, VictoryLine } from 'victory'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <VictoryChart>
          <VictoryLine />
        </VictoryChart>
      </div>
    )
  }
}
