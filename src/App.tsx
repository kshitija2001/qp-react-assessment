import './App.css';
import AddTask from './components/addTask/AddTask';

function App() {
  return (
    <div className="App">
      <h1 style={{ marginRight: "90%", width: "100%" }}>What you want to be done?</h1>
      <AddTask />
    </div>
  );
}

export default App;
