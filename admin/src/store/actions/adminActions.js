export const deleteAdmin = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        
        firestore.collection('photographers').doc(id).delete().then(() => {
            dispatch({type: 'UPDATE_PHOTOGRAPHER', id });
        }).catch((err) => {
            dispatch({type: 'UPDATE_PHOTOGRAPHER_ERROR', err});
        })
    }
}