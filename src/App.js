import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/intro';
import About from './components/About';
import Works from './components/works'
function App() {
  return (
    <div className="App">
      <Navbar />
     <Intro />
     <About />
     <Works />
    </div>
  );
}

export default App;
