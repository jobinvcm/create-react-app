import React from 'react';
import LoginForm from '../../Components/LoginForm';
import { FirebaseContext } from '../../Components/Firebase';

class Login extends React.Component {

  render() {
    return (
      <div>
        <FirebaseContext.Consumer>
          {firebase => {console.log(firebase) ; return(<LoginForm firebase={firebase} />);}}
        </FirebaseContext.Consumer>
      </div>
    )
  }
}

export default Login;
