import React, { Component } from 'react';
import './styles/main.css';
// import { Header } from './components/header';
import { Menu } from './components/menu'
import { Main } from './components/main'
class App extends Component {
  render() {
    return (
      <section id="app">
        <menu>
          <Menu />
        </menu>
        <nav>
          Naigator
        </nav>
        <main><Main /></main>
        <footer>footer</footer>
      </section>
    );
  }
}

export default App;
