import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearAll,
  editTodo,
} from "./todoSlice";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a new todo"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <span
                className={`text-sm flex-1 ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>
            )}

            <div className="flex gap-2 ml-4">
              {editingId === todo.id ? (
                <button
                  onClick={() => {
                    if (editText.trim() === "") return;
                    dispatch(editTodo({ id: todo.id, text: editText }));
                    setEditingId(null);
                    setEditText("");
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-600"
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-green-600"
                  >
                    {todo.completed ? "Undo" : "Done"}
                  </button>

                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-xs hover:bg-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-4">
          No todos yet, Add one above!
        </p>
      )}

      {todos.length > 0 && (
        <button
          onClick={() => dispatch(clearAll())}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm"
        >
          Clear All
        </button>
      )}
    </div>
  );
};
