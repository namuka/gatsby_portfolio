import firebase from 'firebase/app';
import 'firebase/auth'; // importing the auth module as an example

// Firebase web config
const config = {
	apiKey: "AIzaSyCeSvYmAUGZ51P1MwwQJ7-szMa_zLocm2c",
    authDomain: "gatsby-portfolio-9ea98.firebaseapp.com",
    databaseURL: "https://gatsby-portfolio-9ea98-default-rtdb.firebaseio.com",
    projectId: "gatsby-portfolio-9ea98",
    storageBucket: "gatsby-portfolio-9ea98.appspot.com",
    messagingSenderId: "64092369336",
    appId: "1:64092369336:web:93b13bb7bcff5f3fecdf4d"
  // measurementId: '',
}

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}