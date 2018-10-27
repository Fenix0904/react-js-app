import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css';

const App = () => {

    const data = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <Header toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList data={data} />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));