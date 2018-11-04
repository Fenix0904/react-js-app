import React from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends React.Component {

    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onAddingNewItem = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ""
        });
    };

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onAddingNewItem}>
                <input type="text"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       className="form-control"
                       placeholder="What needs to be done"/>
                <button className="btn btn-outline-dark">Add item
                </button>
            </form>
        );
    }
}