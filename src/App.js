import './App.css';
import MusicContainer from './Containers/MusicContainer';

function App() {
  return (
    <div className="App">
    <h1>Top 20 Songs in the UK</h1>
    { <MusicContainer /> }
    </div>
  );
}

export default App;
