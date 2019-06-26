import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index'

class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newTodo: '',
        }
    }

    changeHandeler = e =>{
        console.log(e.target.value);
        this.setState({newTodo: e.target.value})
    }

    addTodo = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''})
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <h3>Brought to you by REDUX</h3>

                <div className='TodoList'>
                    {this.props.todo.map(todo =>(
                        <h1>
                            {todo.todo}
                        </h1>
                    ))
                    }{console.log('maped')}
                </div>
                <form onSubmit={this.addTodo}>
                    <input type='text'
                    placeholder='new todo'
                    onChange={this.changeHandeler}
                    value={this.state.newTodo}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todo: state.todo
    }
}

export default connect(
    mapStateToProps, {addTodo}
)(Todo)