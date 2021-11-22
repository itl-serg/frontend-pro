import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";

import "./reset.css";
import "./App.css";

let todos = [
    { id: 1, title: "Go to home", done: true },
    { id: 2, title: "Go to work", done: false },
];

export function App() {
    const [todosList, setTotos] = useState(todos);
    const [text, setText] = useState(null);

    const addTask = () => {
        const newTask = {
            id: todosList.length + 1,
            title: text,
            done: false,
        };
        setTotos((todosList) => [...todosList, newTask]);
        setText("");
    };

    const removeTask = (id) => {
        const newArrey = todosList.filter((item) => item.id !== id);
        setTotos(newArrey);
    };

    return (
        <div className="app-container">
            <Header />
            <List todos={todosList} removeTask={removeTask} />
            <div className="form">
                <input className="input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <button className="button" onClick={() => addTask()}>
                    Add
                </button>
            </div>
        </div>
    );
}
