import React from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends React.Component {

    state = {
      label: ""
    };

    render() {
        const {onAddItem} = this.props;
        return(
            <form className="item-add-form d-flex">
                <input type="text"
                       className="form-control"
                       placeholder="What needs to be done"/>
                <button className="btn btn-outline-dark"
                    onClick={() => onAddItem("New item")}>Add new item</button>
            </form>
        );
    }
}