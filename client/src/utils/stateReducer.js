const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL':
            return [...action.payload];
        case 'ADD':
            return [...state, action.payload];
        case 'EDIT':
            return state.map(c => c.id === action.payload.id 
                ? {...c, text: action.payload.text} 
                : c
                )
        case 'GET_ONE':
            return [action.payload]
        case 'DELETE':
            return (state.filter(c =>  c.commentId !== action.payload.commentId))
        default:
            return state;
    }
}

export default reducer;