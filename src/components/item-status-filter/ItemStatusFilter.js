import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {

    filters = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const {filter, onFilterChanged} = this.props;
        const buttons = this.filters.map(({name, label}) => {
            const isActive = name === filter;
            const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

            return (
                <button key={name}
                        type='button'
                        onClick={() => onFilterChanged(name)}
                        className={classNames}>
                    {label}
                </button>
            );
        });
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        );
    }
}