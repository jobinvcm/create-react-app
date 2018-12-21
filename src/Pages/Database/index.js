import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FirebaseContext } from '../../Components/Firebase';
import DatabaseForm from '../../Components/DatabaseForm'

export default class Database extends React.Component {
 constructor(props) {
   super(props);
 }

 render() {
  return (
   <div>
    <FirebaseContext.Consumer>
     {firebase => <DatabaseForm firebase={firebase} />}
    </FirebaseContext.Consumer>
   </div>
  )
 }
}
