
import './App.css';
import Emoji from './components/Emoji';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     {/* <Welcome name={"Sourav"} batch={"GGN-1"} organization={'GeeksforGeeks'}/> */}
     <Emoji />
    </div>
  );
}

export default App;
