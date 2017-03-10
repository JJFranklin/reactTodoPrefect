/**
 * Created by hemingming on 2017/3/3.
 */
import React from "react";
import ReactDom from "react-dom";
import Hello from "./hello/hello.jsx";
import "../css/index.less";

function tick(){
    const ele=(
        <p>It's {new Date().toLocaleTimeString()}</p>
    );
    ReactDom.render(
        <Hello sex="male" age="18">
            <div>
                woshi

            </div> {ele}
            <div>
                <div>ds</div>
                fsd
            </div>
        </Hello>,
        document.getElementById("content")
    );
}
setInterval(tick,1000);





