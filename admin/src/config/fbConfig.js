import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    //credencials here
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;