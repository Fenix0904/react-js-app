import React from "react";
import "./SearchPanel.css";

const SearchPanel = ({onChange}) => {
    return (
        <input type="text"
               onChange={onChange}
               className="form-control search-input"
               placeholder="type to search" />
    );
};

export default SearchPanel;