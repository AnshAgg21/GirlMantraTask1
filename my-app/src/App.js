import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero'
import Content from './components/content'

function App() {
  return (
    <>
      <div className="App">
        <div className='row'>
          <Navbar />
          <Hero />
        </div>
        <div className='row'>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
