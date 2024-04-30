import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from 'reactstrap';
import UserValidation from '../validations/UserValidation';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label htmlFor="{input}" className="col-form-label">
          {label}
        </Label>
      </Col>
      <Col md="12">
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        ></Input>
        {touched &&
          ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{ color: "brown" }}>{warning}</p>))}
      </Col>
    </Row>
  );

  const mapStateToProps = (state) => {
    return {
      initialValues : {
        nama : state.users.getUsersDetail.nama,
        NoHP : state.users.getUsersDetail.NoHP,
        alamat : state.users.getUsersDetail.alamat,
        umur : state.users.getUsersDetail.umur,
      }
    };
  };
  
  

class FormComp extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup>
        <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="Umur :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="NoHP"
                component={renderField}
                label="No HP :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    )
  }
}

FormComp = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,
    enableReinitialize: true,
  })(FormComp);
export default connect(mapStateToProps, null)(FormComp);
