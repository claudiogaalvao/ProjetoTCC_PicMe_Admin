export const updatePhotographer = (id, permission) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        
        if(permission===true) {
            firestore.collection('photographers').doc(id).update({
                active: true,
                permission: true
            }).then(() => {
                dispatch({type: 'UPDATE_PHOTOGRAPHER', id });
            }).catch((err) => {
                dispatch({type: 'UPDATE_PHOTOGRAPHER_ERROR', err});
            })
        } else {
            firestore.collection('photographers').doc(id).update({
                active: false,
                permission: false
            }).then(() => {
                dispatch({type: 'UPDATE_PHOTOGRAPHER', id });
            }).catch((err) => {
                dispatch({type: 'UPDATE_PHOTOGRAPHER_ERROR', err});
            })
        }
    }
}