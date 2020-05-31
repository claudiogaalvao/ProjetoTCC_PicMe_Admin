const initState = {
    categories: [
        { id: '1', name: 'Pix', price: 1, qtdmin: 5, 
        acceptedTypes: [ { name: 'Celular' } ]},
        { id: '2', name: 'PixPlus', price: 2, qtdmin: 5, 
        acceptedTypes: [ { name: 'Câmera Semi-profissional'}, {name: 'Drone'}, {name: 'GoPro'} ]},
        { id: '3', name: 'PixPro', price: 4, qtdmin: 5, 
        acceptedTypes: [ { name: 'Câmera Profissional' } ]},
        { id: '4', name: 'PixInstant', price: 5, qtdmin: 1, 
        acceptedTypes: [ { name: 'Polaroid' } ]}
    ]
}

/*const categoryReducer = (state = initState, action) => {
    return state
}*/

const categoryReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_CATEGORY':
            console.log('created category', action.category)
            return state;
        case 'CREATE_CATEGORY_ERROR':
            console.log('create category error', action.err)
            return state;
        default: 
            return state;
    }
}

export default categoryReducer