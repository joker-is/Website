import React from 'react';
import emailSubscribers from '../../services/emailSubscribers';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SubscribeField extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      formErrors: {
        email: '',
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      const doc = {
        signUpDate: new Date(),
        email: this.state.email,
        active: true,
      };
      emailSubscribers.addEmail(doc);
      console.log(`
        --SUBMITTING--
        Email: ${doc.email}
        SignUpDate: ${doc.signUpDate}
        Active: ${doc.active}
      `);
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'invalid email address';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">
              Email
              <input
                className={formErrors.email.length > 0 ? 'error' : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </label>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="signUp">
            <button type="submit">Skrá á póstlista</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SubscribeField;
