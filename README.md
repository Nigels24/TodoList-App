# Todo List App

A Todo List application built as a hands-on practice project to learn React 19, Redux Toolkit, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Tool          | Version |
| ------------- | ------- |
| React         | 19      |
| Vite          | Latest  |
| TypeScript    | Yes     |
| Redux Toolkit | Latest  |
| React-Redux   | Latest  |
| Tailwind CSS  | v4      |

---

## Features

- Add a new todo
- Mark a todo as complete (strikethrough)
- Undo a completed todo
- Edit an existing todo
- Delete a single todo
- Clear all todos at once
- Empty state message when no todos exist
- Press Enter to add a todo quickly

---

## Project Structure

```
src/
├── app/
│   └── store.ts              # Redux store setup
├── features/
│   └── todos/
│       ├── todoSlice.ts      # Redux slice (actions + reducers)
│       └── TodoList.tsx      # Todo UI component
├── App.tsx                   # Root component
├── main.tsx                  # Entry point with Redux Provider
└── index.css                 # Tailwind CSS import
```

---

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd todo-list-app
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

---

## Redux Setup

### todoSlice.ts

The slice manages an array of todo objects. Each todo has:

```typescript
interface Todo {
  id: number; // unique identifier using Date.now()
  text: string; // the todo text
  completed: boolean; // done or not done
}
```

**Actions:**

| Action       | Payload        | What it does                   |
| ------------ | -------------- | ------------------------------ |
| `addTodo`    | `string`       | Adds a new todo to the array   |
| `toggleTodo` | `number` (id)  | Flips completed true/false     |
| `editTodo`   | `{ id, text }` | Updates the text of a todo     |
| `deleteTodo` | `number` (id)  | Removes a todo by id           |
| `clearAll`   | none           | Empties the entire todos array |

### store.ts

Configured using `configureStore` from Redux Toolkit. Exports `RootState` and `AppDispatch` types for TypeScript support.

### main.tsx

The app is wrapped with the Redux `Provider` so all components can access the store.

---

## Key Concepts Learned

- How to manage an **array of objects** in Redux state
- How to use **`PayloadAction`** to pass data with actions
- How to use **`Date.now()`** to generate unique IDs
- How to use **`.map()`** to render a list in React
- How to use **`.filter()`** to remove items from state
- How to use **`.find()`** to locate an item in state
- How to mix **`useState`** and **Redux** together
- How to apply **conditional styling** with Tailwind
- How to handle **keyboard events** like Enter key
- How to show an **empty state** message
- How to implement **inline editing** in a list

---

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## Notes

- Local state (`useState`) is used for the input field and edit mode — not everything needs to be in Redux
- Global state (Redux) is used for the todos array since it is the core app data
- TypeScript strict mode is enabled — always use `import type` when importing types
- Tailwind CSS v4 setup uses `@tailwindcss/vite` plugin

---

_Built as Task 2 of a self-guided frontend learning challenge — React 19 + Redux Toolkit + TypeScript + Tailwind CSS_
