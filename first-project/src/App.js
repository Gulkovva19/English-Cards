
import './App.css';
import './assets/styles/base.scss'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
