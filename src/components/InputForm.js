import React from 'react';

const InputForm = (props) => {
    return (
        <div className="input_form">
            <form>
                <input type="text" onChange={(event) => {props.onChange(event)}}/>
                <button className="btn-addTask" type="button" onClick={props.onClick}>Add Task</button>
            </form>
        </div>
    )
};

export default InputForm;