import React, { useState } from 'react';
import Form from './components/Form';
import Team from './components/TeamForm';


function App() {
  const [team, setTeam] = useState([
    {
      id: '1',
      name: 'Indigo Montoya',
      email: 'preparetodie@email.com',
      role: 'Swordsman',
    }
  ]);

    const addNewTeam = tm => {
      const newTM = {
        id: Date.now(),
        name: tm.name,
        email: tm.email,
        role: tm.role
      };
        setTeam([...team, newTM]);
    }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewTeam={addNewTeam} />
      <Team team={team} />
    </div>
  );
}

export default App;