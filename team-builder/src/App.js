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

    const addNewTeam = teamMember => {
      const newTeamMember = {
        id: Date.now(),
        name: teamMember.name,
        email: teamMember.email,
        role: teamMember.role
      };
        setTeam([...team, newTeamMember]);
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