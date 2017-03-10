import React from "react";
import TodoItems from "./TodoItems.js";


class TodoMain extends React.Component{

    render(){
        let taskList=["吃饭","shuijiai","dadoduid"];
        return(
            <ul>
                {
                    taskList.map((item,i) => {
                        return <TodoItems key={i} taskTxt={item}/>
                    })
                }
            </ul>
        );
    }
}

export default TodoMain;