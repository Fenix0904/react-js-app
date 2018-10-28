import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {

    state = {
      term: ""
    };

    render() {
        return (
            <input
                onChange={this.onSearchChange}
                type="text"
                value={this.state.term}
                className="form-control search-input"
                placeholder="Type to search"/>
        );
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
};