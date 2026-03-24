import { TodoList } from "./features/todos/TodoList";
export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoList />
    </div>
  );
};
