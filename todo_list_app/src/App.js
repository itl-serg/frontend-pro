import React from "react";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
// import { ListItem } from "./components/ListItem/ListItem";

import "./reset.css";
import "./App.css";

export class App extends React.Component {
    render() {
        let todos = [
            { id: 1, title: "Go to home", done: true },
            { id: 2, title: "Go to bed", done: false },
        ];
        return (
            <>
                <Header />
                <List />
            </>
        );
    }
}
