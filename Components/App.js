import React from "react";

import TodoHeader from "./TodoHeader.js";



class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <TodoHeader/>
            </div>
        )

    }}


React.render(
    <App/>,
    document.getElementById("content")
);