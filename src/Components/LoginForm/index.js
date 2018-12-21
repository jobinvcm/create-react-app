import React from 'react'
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button'

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
  render() {
    return (
      <LoginFormContainer>
        <form>
          <FormElementContainer>
            <TextField label="User Name" id="user-name" variant="filled" fullWidth/>
          </FormElementContainer>
          <FormElementContainer>
            <TextField label="Password" id="password" variant="filled" fullWidth/>
          </FormElementContainer>
          <FormElementContainer>
           <Button variant="contained" color="primary" fullWidth>LOGIN</Button>
          </FormElementContainer>
        </form>
      </LoginFormContainer>
    )
  }
}