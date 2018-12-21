import React, { Component } from 'react';
import '../styles/menu.css'

export class Menu extends Component {
  render() {
    return(
      <menu>
        <left-button><a href="#welcome">Home</a></left-button>
        <left-button><a href="#runs">Runs</a></left-button>
        <left-button><a href="#data">Data</a></left-button>
        <right-button><a href="#profile">Profile</a></right-button>
      </menu>
    )
  }
}