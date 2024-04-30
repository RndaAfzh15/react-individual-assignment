import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComp from "../Components/BackComp";
import { connect } from "react-redux";
import { getUsersDetail } from "../actions/userAction";
import DetailUserComponent from "../Components/DetailUserComponent";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    return (
      <Container>
        <BackComp />
        <h1>Detail User</h1>
        <DetailUserComponent/>
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
