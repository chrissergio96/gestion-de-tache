import React from 'react';

function TaskList({ tasks, filter, setFilter }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <h2>LISTE DES TÂCHES</h2>
      <div className="filter">
        <label htmlFor="filter">Filtre :</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Toutes</option>
          <option value="completed">Complétées</option>
          <option value="incomplete">Incomplètes</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Complétée' : 'Incomplète'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
