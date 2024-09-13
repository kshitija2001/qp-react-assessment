import './App.css';
import AddTask from './components/addTask/AddTask';
import { List } from './components/List'
import { ButtonClick } from './components/ButtonClick'
import Box from './components/Box';
import ButtonName from './components/ButtonName';
import Clock from './components/ticking-clock/Clock';

function App() {
  return (
    <div className="App">
      <h1 style={{ marginRight: "90%", width: "100%" }}>What you want to be done?</h1>
      <Clock/>
      <ButtonName/>
      <AddTask />
      <List />
      <Box/>
			<ButtonClick />
    </div>
  );
}

export default App;
