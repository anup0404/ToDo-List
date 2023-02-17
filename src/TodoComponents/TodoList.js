import React from "react";

function TodoList(props) {
    
  return (
    <div className="todo_style">
        <button className="remove"
        onClick={()=>props.delete(props.id)}
        
        >x</button>
      <li>{props.e}</li>
    </div>
  );
}

export default TodoList;
