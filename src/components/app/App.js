import React from "react";
import Header from "../header";
import SearchPanel from "../search-panel/SearchPanel";
import ItemStatusFilter from "../item-status-filter/ItemStatusFilter";
import TodoList from "../todo-list/TodoList";
import ItemAddForm from "../item-add-form/ItemAddForm";

import "./App.css"

export default class App extends React.Component {

    maxId = 100;
    state = {
        data: [
            this.createItem("Drink Coffee"),
            this.createItem("Make Awesome App"),
            this.createItem("Have a lunch")
        ],
        term: ""
    };

    createItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex((el) => el.id === id);
            const newArray = [
                ...data.slice(0, idx), ...data.slice(idx + 1)
            ];
            return {
                data: newArray
            };
        });
    };

    addItem = (text) => {
        const item = this.createItem(text);
        this.setState(({data}) => {
            const newData = [
                ...data,
                item
            ];
            return {
              data: newData
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, "important")
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, "done")
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    render() {
        const {data, term} = this.state;
        const visibleItems = this.search(data, term);
        const doneCount = data.filter((el) => el.done).length;
        const todoCount = data.length - doneCount;
        return (
            <div className="todo-app">
                <Header toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    data={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm
                    onItemAdded={this.addItem}/>
            </div>
        );
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }
}