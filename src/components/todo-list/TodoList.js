import React from "react";
import TodoListItem from '../todo-list-item/TodoListItem';
import "./TodoList.css";

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onImportantIconClicked={() => onToggleImportant(id)}
                    onDoneIconClicked={() => onToggleDone(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;