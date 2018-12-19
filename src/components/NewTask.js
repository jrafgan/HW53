import React from 'react';


const NewTask = props => (
    <div className="newTask">
        <input type="text" value={props.text} onChange={props.onChange} />
        <h3>{props.text}</h3>
    </div>
);

export default NewTask;