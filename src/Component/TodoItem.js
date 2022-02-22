import React, { useContext } from "react";
import Context from "./Context";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TodoItem({ id, task, checked }) {
    let { dispatch } = useContext(Context)
    return (
        <div className="Todo-items" id={id}>
            <input type='checkbox' checked={checked}
                onChange={() => dispatch({
                    type: 'check',
                    payload: id
                })} />
            <span>{task}</span>
            <DeleteForeverIcon className="Todo-icon" onClick={() => dispatch({
                type:'remove',
                payload:id
            })}>delete</DeleteForeverIcon>
        </div>
    )
}

export default TodoItem