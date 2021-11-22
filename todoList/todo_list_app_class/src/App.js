import React from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";

import "./reset.css";
import "./App.css";

let todos = [
    { id: 1, title: "Go to home", done: true },
    { id: 2, title: "Go to work", done: false },
];

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todosList: todos };
    }
    removeItem(itemIndex) {
        let res = this.state.todosList.splice(itemIndex, 1);
        this.setState({ todosList: res });
    }

    addItem(todoItem) {
        let res = this.state.todosList.unshift({
            id: this.state.todosList.length + 1,
            title: todoItem.text,
            done: false,
        });
        this.setState({ todosList: res });
    }

    render() {
        return (
            <>
                <div className="app-container">
                    <Header />
                    <List todos={this.state.todosList} />
                </div>
            </>
        );
    }
}
