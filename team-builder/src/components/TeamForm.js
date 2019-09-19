import React from 'react';

const Team = props => {
    return (
        <>
            {props.team.map(tm => (
                <div className="tm" key={tm.id}>
                    <h2>{tm.name}</h2>
                    <p>{tm.email}</p>
                    <p>{tm.role}</p>
                </div>
            ))}
        </>
    );
};

export default Team; 