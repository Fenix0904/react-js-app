import React from "react";
import TodoListItem from '../todo-list-item/TodoListItem';
import "./TodoList.css";

const TodoList = ({ items }) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps } />
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