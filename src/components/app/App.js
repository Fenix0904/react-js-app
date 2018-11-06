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
            this.createItem('Drink Coffee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch')
        ],
        term: ""
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
            const newArray = [
                ...todoData,
                this.createItem(label)
            ];
            return {
                todoData: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    toggleProperty(arr, id, prop) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {
            ...oldItem,
            [prop]: !oldItem[prop]
        };
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    onSearchInputChanged = (e) => {
        this.setState({
           term: e.target.value
        });
        console.log(this.state.term);
    };

    render() {
        const {todoData, term} = this.state;
        const done = todoData.filter((el) => el.done).length;
        const leftToDo = todoData.length - done;
        const items = this.filterItems(todoData, term);
        return (
            <div className="todo-app">
                <Header toDo={leftToDo} done={done}/>
                <div className="top-panel d-flex">
                    <SearchPanel onChange={this.onSearchInputChanged}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    items={items}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAddItem={this.addNewItem}/>
            </div>
        )
    }

    filterItems(arr, term) {
        if (term.length === 0) {
            return arr;
        }
        return arr.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    createItem(label, done = false, important = false) {
        return {
            id: this.id++,
            label: label,
            done: done,
            important: important
        }
    }
}
