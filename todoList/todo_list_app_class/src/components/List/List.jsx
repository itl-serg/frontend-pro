import React from "react";
import { ListItem } from "../ListItem/ListItem";
import "./List.css";

export class List extends React.Component {
    render() {
        const todos = this.props.todos;

        return (
            <>
                {todos.map((todo) => {
                    return <ListItem data={todo} />;
                })}{" "}
                <div className="form">
                    <input className="input" type="text" />
                    <button className="button">Add</button>
                </div>
            </>
        );
    }
}
