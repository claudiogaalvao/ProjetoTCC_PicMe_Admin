export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}

export const signUp = (newAdmin) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newAdmin.email,
            newAdmin.password
        ).then((resp) => {
            return firestore.collection('admin').doc(resp.user.uid).set({
                firstName: newAdmin.firstName,
                lastName: newAdmin.lastName,
                permission: false,
                createdAt: Date()
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
            
            firebase.auth().signOut().then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS'});
            });
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })

        
    }
}