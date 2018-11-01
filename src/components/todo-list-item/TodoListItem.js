import React from 'react';
import "./TodoListItem.css"

export default class TodoListItem extends React.Component {

    state = {
      done: false
    };

    onLabelClicked = () => {
        this.setState({
           done: true
        });
    };

    render() {
        const {label, important = false} = this.props;
        const {done} = this.state;

        const style = {
            color: important ? 'orange' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classNames = "todo-list-item";
        if(done) {
            classNames += ' done';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClicked}>
                  {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right">
                  <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                  <i className="fa fa-trash-o"/>
                </button>
             </span>
        );
    }
}