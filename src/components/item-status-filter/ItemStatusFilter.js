import React from 'react';
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {

    filters = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"}
    ];

    render() {
        const {filter, onFilterChanged} = this.props;
        const buttons = this.filters.map((el) => {
            const isActive = el.name === filter;
            const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

            return (
                <button key={el.name}
                        type="button"
                        onClick={() => onFilterChanged(el.name)}
                        className={classNames}>
                    {el.label}
                </button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}