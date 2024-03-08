import './App.css';
import Socials from './Socials.js';
import Socials2 from './Socials2.js';
import headshot from './headshot.jpg'
function App() {
  return (
    <div className="App">
      <img class='headshot' src={headshot}/>
      
      <h1>❤︎ Jerard Louis Dayanghirang Guevarra ❤︎</h1>
      <p>♪ Software Engineer | Musician ♫</p>
      <p>⚲ NYC x LA </p>
      <Socials></Socials>
      <Socials2/>
      <p><small><small>Made by Jerard Louis Dayanghirang Guevarra</small></small></p>
    </div>
  );
}

export default App;