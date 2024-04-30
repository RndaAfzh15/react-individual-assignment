import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComp from "../Components/BackComp";
import FormComp from "../Components/FormComp";
import { connect } from "react-redux";
import { getUsersDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getRespondDataUser: state.users.getRespondDataUser,
    errorRespondDataUser: state.users.errorRespondDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getRespondDataUser || this.props.errorRespondDataUser) {
      if (this.props.errorRespondDataUser) {
        swal("Failed!", this.props.getRespondDataUser, "error");
      } else {
        swal(
          "User Updated!",
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
        <h1>Edit User</h1>
        <FormComp onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
