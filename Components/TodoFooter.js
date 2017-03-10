import React from "react";
import ReactDom from "react-dom";

class TodoFooter extends React.Component{

    render(){
        let btnName = "全部清除";
        return(
            <div>
                <input type="checkbox"/>
                <span>3个已完成/一共6个</span>
                <input type="button" value={btnName}/>
            </div>
        );
    }
}

export default TodoFooter;