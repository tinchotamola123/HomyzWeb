import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import './App.css';
import Residencies from './components/Residencies/Residencies';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Value from './components/Value/Value';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <div>
        <Companies/>
      </div>
      <div>
        <Residencies/>
      </div>
      <div>
        <Value/>
      </div>
      <div>
        <GetStarted/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
