import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskManager from './components/TaskManager';
import Sidebar from './components/Sidebar';
import './App.css';

// Fonction pour sauvegarder les tâches dans le localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Fonction pour charger les tâches depuis le localStorage
const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

function App() {
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [filter, setFilter] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');

  // Ajouter une tâche
  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Modifier une tâche
  const updateTask = (id, newTitle) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task));
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Marquer une tâche comme complétée
  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div className="app">
      <Sidebar setSelectedSection={setSelectedSection} />
      <div className="content">
        {selectedSection === 'form' && <TaskForm addTask={addTask} />}
        {selectedSection === 'list' && <TaskList tasks={tasks} filter={filter} setFilter={setFilter} />}
        {selectedSection === 'manage' && (
          <TaskManager tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask} />
        )}
        {selectedSection === 'all' && (
          <div>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} filter={filter} setFilter={setFilter} />
            <TaskManager tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} completeTask={completeTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
