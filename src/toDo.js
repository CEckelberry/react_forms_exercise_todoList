import React from "react";

const ToDo = ({key, id, task, handleRemove}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div key={key} id={id}>{task}</div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default ToDo;