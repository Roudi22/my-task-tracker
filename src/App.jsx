import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Task 2 ",
    day: "Dec 12th at 5:00 pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Task 3 ",
    day: "Dec 13th at 9:00 am",
    reminder: true,
  },
];

function App() {

  const [tasks,setTasks] = React.useState(initialTasks);

  function toggleReminder (id) {
    const newTasks = tasks.map((task) => (
      task.id === id ? {...task, reminder: !task.reminder} : task
    ));

    setTasks(newTasks);
  }


  function deleteTask (id) {
    const newTasks = tasks.filter((task)=> task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Header />
      <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/>
    </div>
  );
}

export default App;
