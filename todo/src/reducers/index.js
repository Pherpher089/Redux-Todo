//here we will import our action containers

const initalState = {
    todo:[
        {todo: 'Take out trash', completed: false},
        {todo: 'Change light bulb', completed: false}
    ]};

function reducer(state = initalState, action) {
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todo: [...state.todo, action.payload]
            }
        
        default:
            return state;
    }
}

export default reducer;