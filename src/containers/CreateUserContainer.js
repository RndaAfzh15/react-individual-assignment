import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComp from "../Components/BackComp";
import FormComp from "../Components/FormComp";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getRespondDataUser: state.users.getRespondDataUser,
    errorRespondDataUser: state.users.errorRespondDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getRespondDataUser || this.props.errorRespondDataUser) {
      if (this.props.errorRespondDataUser) 
      {
        swal(
          "Failed!",
          this.props.getRespondDataUser,
          "error"
        );
      } else {
        swal(
          "User Created!",
          "Nama : " +
            this.props.getRespondDataUser.nama +
            ", Umur : " +
            this.props.getRespondDataUser.umur,
          "success"
        );
    }

  }
    
    return (
      <Container>
        <BackComp />
        <h1>Create User</h1>
        <FormComp onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
