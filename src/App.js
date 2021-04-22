import './App.css';
import Socials from './Socials.js';
import headshot from './headshot.jpg'
function App() {
  return (
    <div className="App">
      <img class='headshot' src={headshot}/>
      
      <h1>Jerard Louis Dayanghirang Guevarra</h1>
      <p>Software Engineer | Musician</p>
      <p>Based in NYC</p>
      <Socials/>
    </div>
  );
}

export default App;