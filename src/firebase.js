import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtOSSdh6SW7SX3zoNxm9ZNCu_YhlEzYK0",
    authDomain: "slack-react-clone-9befe.firebaseapp.com",
    projectId: "slack-react-clone-9befe",
    storageBucket: "slack-react-clone-9befe.appspot.com",
    messagingSenderId: "270980175250",
    appId: "1:270980175250:web:8c45e01981293bd9b59d4b",
    measurementId: "G-QRN1VQ6X3D"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;

