import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState("");

  //   function entradaDatos(event) {
  //     setInputValue(event.target.value);
  //   }

  // añadir en un array -> concat
  // borrar en un array -> filter
  // actualizar -> map

  return (
    <div className="container ">
      <h1 className="text-center">Todos {inputValue}</h1>
      <div className="shadow">
        <ul className="list-unstyled ">
          <li className="border-bottom border-grey p-3">
            <input
              className=" w-100 border-0  "
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={(e) =>
                e.key === "Enter" ? setTodos(todos.concat([inputValue])) : null
              }
            />
          </li>
          {/* {todos.map((item, index) => (
            <li className="d-flex justify-content-between p-3 border-bottom border-grey">
              <p> {item} </p>
              <button
                type="button"
                class="btn-close"
                disabled
                aria-label="Close"
                onClick={() =>
                  setTodos(
                    todos.filter((t, currentIndex) => index != currentIndex)
                  )
                }
              ></button>
            </li>
          ))} */}
        </ul>
        <div className="p-1">{todos.length} item left</div>
      </div>
    </div>
  );
};

export default Home;
