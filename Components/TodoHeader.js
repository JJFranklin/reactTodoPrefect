import React from "react";

class TodoHeader extends React.Component{
    handelKeyUp(event){
        if(event.keyCode === 13){
            let taskVal = event.target.value;
            if (!taskVal){
                return false;
            }

            let todoItem ={
                todoText:taskVal,
                isDone:false
            }
            event.target.value = "";
            this.props.addTodo(todoItem);

        }
    }

    render(){
        let title="React-Todos";
        return(
            <div className="Todo-header">
                <h1>{title}</h1>
                <input  type="text" onKeyUp={this.handelKeyUp.bind(this)} placeholder="请输入你的工作!"/>
            </div>
        );
    }
}

export default TodoHeader;


