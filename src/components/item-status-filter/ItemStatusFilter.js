import React from 'react';
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component{
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-second">Active</button>
                <button type="button"
                        className="btn btn-outline-second">Done</button>
            </div>
        );
    }
}