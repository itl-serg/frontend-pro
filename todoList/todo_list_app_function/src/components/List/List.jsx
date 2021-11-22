import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./List.css";

export function List({ todos, removeTask }) {
    return (
        <>
            {todos.map((todo) => {
                return <ListItem data={todo} removeTask={removeTask} />;
            })}
        </>
    );
}
