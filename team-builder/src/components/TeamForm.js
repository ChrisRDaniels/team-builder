import React from 'react';

const Team = props => {
    return (
        <>
            {props.team.map(teamMember => (
                <div className="teamMember" key={teamMember.id}>
                    <h2>{teamMember.name}</h2>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>
            ))}
        </>
    );
};

export default Team; 