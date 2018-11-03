import React from "react";
import Header from "../header/Header";
import SearchPanel from "../search-panel/SearchPanel";
import ItemStatusFilter from "../item-status-filter/ItemStatusFilter";
import TodoList from "../todo-list/TodoList";
import ItemAddForm from "../item-add-form/ItemAddForm";

import "./App.css"

export default class App extends React.Component {

    id = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', id: 1},
            {label: 'Make Awesome App', id: 2},
            {label: 'Have a lunch', id: 3}
        ],
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];
            return {
                todoData: newArray
            }
        });
    };

    addNewItem = (label) => {
        this.setState(({todoData}) => {
            const id = this.id++;
            const newArray = [
                ...todoData,
                {
                    label: label,
                    id: id
                }
            ];
            return {
                todoData: newArray
            }
        })
    };

    render() {
        return (
            <div className="todo-app">
                <Header toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    items={this.state.todoData}
                    onDeleted={this.deleteItem}/>
                <ItemAddForm onAddItem={this.addNewItem}/>
            </div>
        )
    }
}
