import React from "react";

export default class todoInput extends React.Component {
  render() {
    const { item, handleChange, handleSumit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSumit={handleSumit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary mt-3 text-uppercase"
          >
            add item
          </button>
        </form>
      </div>
    );
  }
}
