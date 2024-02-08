import React, { useCallback, useRef } from "react";
import "./App.css";
import { useTodos, useAddTodo, useRemoveTodo, TodosProvider } from "./Todos";

interface Props {
  children: React.ReactNode;
}

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: React.FC<Props> = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...rest }) => <button {...rest}>{children}</button>;

function App() {
  const todos = useTodos();
  const addTodo = useAddTodo();
  const removeTodo = useRemoveTodo();

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    }
  }, [addTodo]);

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <TodosProvider initialTodos={([
      { id: 0, text: "Hey there useContext", done: false },
    ])}>
      <div style={{
        display: "grid", gridTemplateColumns: "50% 50%",
      }}><App></App>
        <App></App>
      </div>
    </TodosProvider>)
}
export default AppWrapper;
