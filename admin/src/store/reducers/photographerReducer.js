const initState = {
    photographers: [
        { id: '1', firstName: 'Claudio', lastName: 'Galvão', dateBirth: '10/11/1996', 
        email: '', cpf: '426.123.453-90', dateRegister: '09/06/2019', approve: false,
        devices: [ { type: 'celular', brand: 'Apple', model: 'iPhone XR'} ] },
        { id: '2', firstName: 'Francisco', lastName: 'Lima', dateBirth: '10/11/1996', 
        email: '', cpf: '426.123.453-90', dateRegister: '09/06/2019', approve: false,
        devices: [ { type: 'celular', brand: 'Apple', model: 'iPhone XR'} ] },
        { id: '3', firstName: 'Raira', lastName: 'Silva', dateBirth: '10/11/1996', 
        email: '', cpf: '426.123.453-90', dateRegister: '09/06/2019', approve: false,
        devices: [ { type: 'celular', brand: 'Apple', model: 'iPhone XR'} ] },
        { id: '4', firstName: 'Gustavo', lastName: 'Iffanger', dateBirth: '10/11/1996', 
        email: '', cpf: '426.123.453-90', dateRegister: '09/06/2019', approve: false,
        devices: [ { type: 'celular', brand: 'Apple', model: 'iPhone XR'} ] }
    ]
}

const photographerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_PHOTOGRAPHER':
            console.log('created photographer', action.id)
            return state;
        case 'UPDATE_PHOTOGRAPHER_ERROR':
            console.log('create photographer error', action.err)
            return state;
        default: 
            return state;
    }
}

export default photographerReducer