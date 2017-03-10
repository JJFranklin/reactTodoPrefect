
import React from "react";

class TodoItems extends React.Component{
    render(){

        let delBtnName = "删除";
        return(
            <li><input type="checkbox"/><span>{this.props.taskTxt}</span><input type="button"value={delBtnName}/></li>
        );
    }
}
export default TodoItems;