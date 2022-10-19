import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import task from "./components/Task";

import AddTask from "./components/AddTask";


function App() {

  const[showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Doctors Appointment',
            day: 'Feb 14 at 12:00',
            reminder:true,
        },
        {
            id:2,
            text: 'Office meeting start at',
            day: 'Jan 1 at 10:00',
            reminder:true,
        },
        {
            id:3,
            text: 'Food Shopping',
            day: 'Feb 14 at 12:00',
            reminder:false,
        },
    
    ]
)

// add new task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask= (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: 
  !task.reminder } : task))
} 



  return (
    <div className="App">
      <div class="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}

       {tasks.length > 0 ? (
       <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> ) : ('No Tasks to show' )}
       
      </div>
    </div>
  );
}

Header.defaultProps =  {
  title: 'Task Tracker'
}

export default App;
