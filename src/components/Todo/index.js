import React, { Component } from "react";
import s from "./Todo.module.css";
import '../../index.css'

class TodoListPage extends Component {
  state = {
    todos: [
      { id: Math.random(), title: "Todo 1", done: false },
      { id: Math.random(), title: "Todo 2", done: true },
      { id: Math.random(), title: "Todo 3", done: false },
    ],
    todoText: "",
  };
  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: this.state.todoText,
      done: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todoText: "",
    });
  };

  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodos });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  setTodoText = (e) => {
    this.setState({ todoText: e.target.value });
  };

  render() {
    const { todos, todoText } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <div className={s.formWrapper}>
          <div className={s.todoCard}>
            <form onSubmit={this.addTodo}>
              <div className={s.fromGroup}>
                <label>Todo Title</label>
                <input
                  name="todo-title"
                  onChange={this.setTodoText}
                  value={todoText}
                  placeholder="Write..."
                />
              </div>
              <div className={s.formWrapper}>
                <button type="submit" className={s.todoBtn}>
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={s.todoGrid}>
          {todos.map((item) => (
            <TodoCard
              key={item.id}
              todo={item}
              onDelete={this.deleteTodo}
              onDone={this.toggleTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}
const TodoCard = ({ todo, onDelete, onDone }) => (
  <div className={s.todoCard}>
    <h3 className={s.cardText}>{todo.title}</h3>
    <div className={s.todoActions}>
      <button className={s.todoBtn} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
      <button className={s.todoBtn} onClick={() => onDone(todo.id)}>
        {todo.done ? "Done" : "Not Done"}
      </button>
    </div>
  </div>
);

export default TodoListPage;
