import './App.css';
import AddTask from './components/addTask/AddTask';
import { List } from './components/List'
import { ButtonClick } from './components/ButtonClick'
import Box from './components/Box';
import ButtonName from './components/ButtonName';

function App() {
  return (
    <div className="App">
      <h1 style={{ marginRight: "90%", width: "100%" }}>What you want to be done?</h1>
      <ButtonName/>
      <AddTask />
      <List />
      <Box/>
			<ButtonClick />
    </div>
  );
}

export default App;
