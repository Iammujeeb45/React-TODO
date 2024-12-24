import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const setNewTodos = () => {
    if (value === "") {
      alert("Please enter todo list");
    } else {
      const allTodos = [...todos, value];
      setTodos(allTodos);
      setValue("");
    }
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <section className="w-full h-screen">
      <div className="w-full h-16 bg-fuchsia-500 flex items-center justify-center phone:bg-black/50">
        <span className="text-4xl font-bold hover:underline cursor-pointer text-white/90 ">
          TODO-List
        </span>
      </div>
      <div className="w-full h-auto flex justify-center items-center mt-10  ">
        <div className="w-2/6 h-16 border border-purple-300 flex items-center p-2 gap-4 rounded-md lappy:flex-col lappy:w-4/6 lappy:p-3 lappy:h-auto tab:w-5/6 phone:border-red-300">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="w-4/5 h-12  border rounded-md tab:w-full"
            placeholder="  Enter Your Data"
          />
          <button
            className=" w-1/5 h-full  bg-purple-300 text-l font-bold rounded-md lappy:h-12 lappy:w-2/6 phone:bg-red-300 phone:text-black phone:hover:bg-red-900 phone:hover:text-white"
            onClick={setNewTodos}
          >
            submit
          </button>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="flex flex-col justify-center items-center w-2/6 border border-gray-300 shadow-lg mt-10 h-auto rounded-lg p-4 bg-white lappy:w-4/6 tab:w-5/6">
          <h1 className="text-xl font-semibold mb-4 text-gray-700">
            To-Do List
          </h1>
          <div className="w-full h-auto overflow-y-auto lappy:flex-col ">
            {todos.length > 0 ? (
              todos.map((ele, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 px-4 mb-2 bg-purple-400 rounded-md text-white hover:bg-purple-900 transition-colors text-2xl font-bold phone:bg-red-300 phone:hover:bg-red-900 phone:text-black phone:hover:text-white phone:cursor-pointer"
                >
                  <span>{ele}</span>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm h-full">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(i)}
                      className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center"></p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
