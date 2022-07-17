import * as firebase from 'firebase';
import 'firebase/auth'
import  'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCPVyjG-KZjKwKYsIyhl8ki-7dmIfb4pS0",
    authDomain: "gifted-chat-b21f2.firebaseapp.com",
    projectId: "gifted-chat-b21f2",
    storageBucket: "gifted-chat-b21f2.appspot.com",
    messagingSenderId: "301631612842",
    appId: "1:301631612842:web:05f22bb8277af28f866dd3"
  };

  let app;
  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app= firebase.app()
  }
  const db = app.firestore();
  const auth = firebase.auth();
  export {db, auth};