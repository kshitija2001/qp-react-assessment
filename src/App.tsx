import './App.css';
import AddTask from './components/addTask/AddTask';
import { List } from './components/List'
import { ButtonClick } from './components/ButtonClick'

function App() {
  return (
    <div className="App">
      <h1 style={{ marginRight: "90%", width: "100%" }}>What you want to be done?</h1>
      <AddTask />
      <List />
			<ButtonClick />
    </div>
  );
}

export default App;
