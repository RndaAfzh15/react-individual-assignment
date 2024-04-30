import React, { Component } from "react";
import TableComp from "../Components/TableComp";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../actions/userAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }
  render() {
    return (
      <div>
        <TableComp />
      </div>
    );
  }
}

export default connect()(HomeContainer);
