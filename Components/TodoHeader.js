import React from "react";

class TodoHeader extends React.Component{
    handelKeyUp(e){

    }

    render(){
        return(
            <div className="Todo-header">
                <input  type="text" onKeyUp={this.handelKeyUp.bind(this)} placeholder="请输入你的工作!"/>
            </div>
        );
    }
}

export default TodoHeader;


