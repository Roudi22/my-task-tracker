import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  function addTask (task) {
    let id = 0;
    if (tasks.length > 0) {
      id = tasks[tasks.length-1].id + 1;
    }

    const newTask = {...task, id};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header />
      <AddTask onSubmit={addTask} />
      <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/>
      
    </div>
  );
}

export default App;
