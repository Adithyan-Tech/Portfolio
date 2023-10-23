import './App.css';


import Navbar from './components/Navbar';
import Intro from './components/intro';
import About from './components/About';
import Works from './components/works'
import Clint from './components/clint';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Intro />
     <About />
     <Works />
     <Clint />

    </div>
  );
}

export default App;
