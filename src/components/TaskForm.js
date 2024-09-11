import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form">
      <h2>FORMULAIRE D'AJOUT DE TÂCHES</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description de la tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit"> Ajouter la tâche </button>
      </form>
    </div>
  );
}

export default TaskForm;
