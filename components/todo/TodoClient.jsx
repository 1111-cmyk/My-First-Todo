// components/ClientApp.js
"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineLoading, AiOutlinePlus } from "react-icons/ai";
import Todo from "@/components/todo/Todo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/connection/firebaseConfig";

// styles for TodoClient
const style = {
  bg: `h-screen w-screen p-4 `,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function ClientApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchTodos() {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "todos"));
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  // Create a new todo via API
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") return alert("Please enter a valid todo");

    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input, completed: false }),
    });
    if (response.ok) {
      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    }
    setInput("");
  };

  // Update todo completion
  const toggleComplete = async (todo) => {
    const response = await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    if (response.ok) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, completed: !t.completed } : t
        )
      );
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>My-First Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            placeholder="Add Todo"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {loading ? (
            <>
              <div className="w-full h-[300px] my-5 flex items-center justify-center">
                {" "}
                <AiOutlineLoading className="text-5xl text-green-500" />
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              {todos.map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))}
            </>
          )}
        </ul>
        {todos.length > 0 && (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default ClientApp;
