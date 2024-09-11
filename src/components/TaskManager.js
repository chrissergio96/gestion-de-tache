import React, { useState } from 'react';

function TaskManager({ tasks, updateTask, deleteTask, completeTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleUpdate = (id) => {
    updateTask(id, newTitle);
    setEditingTaskId(null);
  };

  return (
    <div className="task-manager">
      <h2>GESTION DES TÂCHES</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={() => handleUpdate(task.id)}>Modifier</button>
              </>
            ) : (
              <> <br></br>
                {task.title}<br></br><br></br>
                <p>{task.description}</p> {/* Ajouter la description ici */}
                <button className='modifier' onClick={() => setEditingTaskId(task.id)}>Modifier</button>
                <button onClick={() => deleteTask(task.id)}>Supprimer</button>
                <button className='modifier' onClick={() => completeTask(task.id)}>
                  {task.completed ? 'Incomplète' : 'Complétée'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
