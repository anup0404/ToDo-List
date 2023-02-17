import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoComponents/TodoList";
function App() {
  const [item, setItem] = useState("");
  const [itemValue, setItemValue] = useState([]);

  const deleteItems=(id)=> {
    setItemValue((old) => { return old.filter((arrEle,index)=>{
    return index!==id;
  });
  });
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button
            onClick={() => {
              setItemValue((old) => [...old, item]);
              setItem("");
            }}
          >
            +
          </button>

          <ol>
            {itemValue.map((e, index) => {
              return (
                <TodoList e={e} key={index} id={index} delete={deleteItems} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
