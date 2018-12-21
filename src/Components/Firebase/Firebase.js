import app from 'firebase/app';
import 'firebase/auth'

var config = {
 apiKey: "AIzaSyBWaFKjSk5d54b9GgBa7YXzdWiBAYzesyU",
 authDomain: "ideal-designers-c75d6.firebaseapp.com",
 databaseURL: "https://ideal-designers-c75d6.firebaseio.com",
 projectId: "ideal-designers-c75d6",
 storageBucket: "ideal-designers-c75d6.appspot.com",
 messagingSenderId: "133400233012"
};

class Firebase {
 constructor() {
  app.initializeApp(config);
  this.auth = app.auth();
 }

 doCreateUserWithEmailAndPassword = (email, password) => {
  this.auth.createUserWithEmailAndPassword(email, password);
 }

 dosignInWithEmailAndPassword = (email, password) => {
  this.auth.signInWithEmailAndPassword(email, password);
 }

 doSignOut = () => this.auth.signOut();
 
 doupdatePassword = password => this.auth.updatePassword(password);
}

export default Firebase;
