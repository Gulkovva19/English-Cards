import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './assets/styles/base.scss'
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'
import NoMatch from './components/NoMatch.jsx'
import WordsApi from './components/WordsApi.jsx'


function App({ wordStore }) {

  useEffect(() => {
    wordStore.loadData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <WordsApi>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </WordsApi>
        <Footer />
      </div>
    </Router>
  );
}

export default inject(['wordStore'])(observer(App));
