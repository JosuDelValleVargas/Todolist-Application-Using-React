import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);


  //   function entradaDatos(event) {
  //     setInputValue(event.target.value);
  //   }

  // añadir en un array -> concat
  // borrar en un array -> filter
  // actualizar -> map



  return (
    <div className="container ">
      <h1 className="text-center">Todos </h1>
      <div className="shadow ">
        <ul className="list-unstyled ">
          <li className="border-bottom border-grey p-3">
            <input
              className=" w-100 border-0  "
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={(e) => {
                // e.key === "Enter" ? setTodos(todos.concat(inputValue)) : null
                if (e.key === "Enter" && inputValue !== "") {
                  setTodos(todos.concat(inputValue));
                  setInputValue("");
                }
              }}
            />
          </li>
          {todos.map((item, index) =>
            <li className="p-3 border-bottom border-grey">
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}>
                {item}

                {hoverIndex === index && (
                  <button
                    type="button"
                    class="btn-close btn-outline ps-5 "
                    aria-label="Close"
                    onClick={() =>
                      setTodos(
                        todos.filter((todos, currentIndex) => index != currentIndex)
                      )}>
                  </button>
                )}
              </div>
            </li>
          )}
        </ul>
        <div className="ps-1">{todos.length} item left</div>
      </div>
    </div>

  );
};

export default Home;
