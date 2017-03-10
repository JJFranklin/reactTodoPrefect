import React from "react";


class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    btnClick(){
        alert("ddswdwede");
    }
    toggleClick(){
        this.setState({liked:!this.state.liked});
    }

    render() {
        let text = this.state.liked ? 'liked':'haven\'t liked';
        let names = ["hello", "my", "world"];
        let btnVal = "show me";
        return (
            <div>{
                names.map(function (index) {
                    return <div key={index}>{index}</div>
                })
            }
                <h1>I am {this.props.sex} and my age is {this.props.age}</h1>
                <ol>{
                    React.Children.map(this.props.children,function (child,i) {
                        return <li key={i}>{child}</li>
                    })
                }
                </ol>
                <button onClick={this.btnClick.bind(this)}>{btnVal}</button>
                <div>
                    <p onClick={this.toggleClick.bind(this)}>
                        YOU {text} this. click to hide
                    </p>

                    {this.props.title}
                </div>
            </div>
        )
    }
}

Hello.defaultProps = {
    title:"i am s5 one"
};


export default Hello;