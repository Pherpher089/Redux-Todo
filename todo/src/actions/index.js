export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(newTodo){
    console.log(newTodo);
    return {
        type: 'ADD_TODO',
        payload: {todo: newTodo, completed: false}
    }
} 

export function completeTodo(index){
    return{
        type: 'COMPLETE_TODO',
        payload: index
    }
}