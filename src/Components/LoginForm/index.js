import React from 'react'
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { FirebaseContext } from '../Firebase';

const LoginFormContainer = Styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 320px;
  padding: 24px 24px 48px 24px;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const FormElementContainer = Styled.div`
  padding-top: 12px;
`;

export default class LoginForm extends React.Component{
  constructor(props) {
    super(props)

    this.state= { email: '', password: ''}
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.firebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
  }

  onChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <LoginFormContainer>
            <form onSubmit={this.onSubmit} firebase={firebase}>
              <FormElementContainer>
                <TextField label="Email" id="email" name="email" variant="filled" onChange={this.onChange} fullWidth/>
              </FormElementContainer>
              <FormElementContainer>
                <TextField label="Password" id="password" name="password" variant="filled" onChange={this.onChange} fullWidth/>
              </FormElementContainer>
              <FormElementContainer>
              <Button variant="contained" color="primary" type="submit" fullWidth>LOGIN</Button>
              </FormElementContainer>
            </form>
          </LoginFormContainer> 
        )}

      </FirebaseContext.Consumer>
    )
  }
}