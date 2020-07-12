import React, {useState} from 'react';
import './App.css';
import Tab from './Components/Tab';

function App() {

  const [tasks, setTasks] = useState([{label: "tab1", content: "content1"}, {label: "tab2", content: "content2"}, {label: "tab3", content: "content3"}]);

  return (
    <div className="App">
      <Tab tasks={tasks}/>
    </div>
  );
}

export default App;
