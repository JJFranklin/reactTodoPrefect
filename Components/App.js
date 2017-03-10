/**
 * 将React 和reactDom分别引入
 */

import React from "react";
import ReactDom from "react-dom";
import TodoHeader from "./TodoHeader.js";
import TodoFooter from "./TodoFooter";
import TodoMain from "./TodoMain.js"

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="appContainer">
                <TodoHeader/>
                <TodoMain/>
                <TodoFooter/>
            </div>
        )

    }}
ReactDom.render(
    <App/>,
    document.getElementById("content")
);