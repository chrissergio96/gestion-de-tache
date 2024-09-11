import React from 'react';
import logo from './G (2).png'

function Sidebar({ setSelectedSection }) {
  return (
    <div className="sidebar">
    <img src={logo} alt="Logo" className="logo" /> <br></br>
     <ul>
        <li>
          <button onClick= {() => setSelectedSection('all')}> Afficher Tout</button>
        </li> 
        <li>
          <button onClick= {() => setSelectedSection('form')}> Ajouter une tâche</button>
        </li>
        <li>
          <button onClick= {() => setSelectedSection('list')}>Liste des tâches</button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('manage')}>Gérer les tâches</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
