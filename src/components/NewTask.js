import React from 'react';


const NewTask = props => (
    <div className="NewTask">
        <h1>
            {props.name}
            <button onClick={props.remove}>X</button>
        </h1>
        <p>
            Age: {props.age}
            <button onClick={props.onClick}>+</button>
        </p>
        <p>{props.children}</p>
        <p>
            <input type="text" value={props.name} onChange={props.onChange} />
        </p>
    </div>
);

export default NewTask;