import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class DatabaseForm extends React.Component {
 constructor(props) {
   super(props);
   this.onSubmit = this.onSubmit.bind(this);
   this.state = {key: '', value: ''};
   this.onChange = this.onChange.bind(this);
 }

 onChange(event) {
  this.setState({[event.target.name]: event.target.value});

 }

 onSubmit(event) {
  this.props.firebase.updateDatabase(this.state)
  console.log(this.props.firebase);
 }

 render() {
  return (
   <div>
    <TextField variant="filled" label="Key" name="key" onChange={this.onChange} fullWidth />
    <TextField variant="filled" label="Value" name="value" onChange={this.onChange} fullWidth />
    <Button onClick={this.onSubmit} fullWidth>Click Here </Button>
   </div>
  )
 }
}
