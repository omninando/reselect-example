import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import Counter from "./containers/Counter";
import TodoList from "./containers/TodoList";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
    <hr />
    <Counter />
  </div>
);
export default App;
