import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./List.css";

export function List({ todos, removeTask, markTodoDone }) {
    return (
        <>
            {todos.map((todo, index) => {
                return <ListItem key={index} data={todo} removeTask={removeTask} markTodoDone={markTodoDone} />;
            })}
        </>
    );
}
