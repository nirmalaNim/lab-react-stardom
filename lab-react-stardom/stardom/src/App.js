import  Prostar from'./components/Prostar';
import './App.css';
import prostars from './resources/prostars.json'




function App() {
  return (
    <div className="App">
      
      <Prostar data={prostars}/>
    </div>
  );
}

export default App;
