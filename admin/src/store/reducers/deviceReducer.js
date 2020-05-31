const initState = {
    devices: []
}

const deviceReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_DEVICE':
            console.log('created device', action.device)
            return state;
        case 'CREATE_DEVICE_ERROR':
            console.log('create device error', action.err)
            return state;
        case 'DELETE_DEVICE':
            console.log('deleted device', action.device)
            return state;
        case 'DELETE_DEVICE_ERROR':
            console.log('deleted device error', action.err)
            return state;
        case 'UPDATE_DEVICE':
            console.log('update device', action.device)
            return state;
        case 'UPDATE_DEVICE_ERROR':
            console.log('update device error', action.err)
            return state;
        default: 
            return state;
    }
}

export default deviceReducer