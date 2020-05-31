export const createCategory = (category) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('category').add({
            ...category,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_CATEGORY', category });
        }).catch((err) => {
            dispatch({type: 'CREATE_CATEGORY_ERROR', err});
        })
    }
}