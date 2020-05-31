export const createDevice = (device) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('devices').add({
            ...device,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_DEVICE', device });
        }).catch((err) => {
            dispatch({type: 'CREATE_DEVICE_ERROR', err});
        })
    }
}

export const deleteDevice = (device) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('devices').doc(device.id)
            .delete()
            .then(() => {
                dispatch({type: 'DELETE_DEVICE', device });
            }).catch((err) => {
                dispatch({type: 'DELETE_DEVICE_ERROR', err});
            })
    }
}

export const disableDevice = (device) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('devices').doc(device.id)
            .update({
                active: false
            })
            .then(() => {
                dispatch({type: 'DELETE_DEVICE', device });
            }).catch((err) => {
                dispatch({type: 'DELETE_DEVICE_ERROR', err});
            })
    }
}

export const updateDevice = (device) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('devices').doc(device.id)
            .update({
                type: device.type,
                brand: device.brand,
                model: device.model
            })
            .then(() => {
                dispatch({type: 'UPDATE_DEVICE', device });
            }).catch((err) => {
                dispatch({type: 'UPDATE_DEVICE_ERROR', err});
            })
    }
}

