import React from 'react';
import  { useSelector } from 'react-redux'

function Task() {

    const tasl = useSelector((state) => state.task.value)

    return ( 
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
     );
}

export default Task;