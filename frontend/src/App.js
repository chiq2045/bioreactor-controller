import React, { Component } from 'react';
import './styles/main.css';
// import { Header } from './components/header';

class App extends Component {
  render() {
    return (
      <section id="app">
        <menu>
            <button><a href="#welcome">Home</a></button>
            <button><a href="#runs">Runs</a></button>
            <button><a href="#data">Data</a></button>
            <button><a href="#profile">Profile</a></button>
        </menu>
        <nav>
          Naigator
        </nav>
        <main>main</main>
        <footer>footer</footer>
      </section>
    );
  }
}

export default App;
