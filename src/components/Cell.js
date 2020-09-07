import React, { Component} from 'react';

class Cell extends Component {
    
    constructor(props){
        super(props)
       this.state={
           styles:{
            backgroundColor:"white",
            color:"blue",
            border:"hidden",
            width:"50px",
            height:"50px"
           },
            isRed:true
       }
       this.changeColor = this.changeColor.bind(this)
    }
        
    changeColor(){
        var bcolor = "black";
        //alert("jeoo");
        if(this.state.isRed){
            bcolor = "yellow";
        }
        else{
            bcolor = "red";
        }
        this.setState({styles:{backgroundColor:bcolor,borderRadius:"100%",border:"hidden",color:"green"}});
        this.state.isRed = !this.state.isRed;
    }
     render() {
        const style31 = {color:"red"}
        const hideStyle = {opacity:"0%"}
        return (
            <button className="cell" style={this.props.text==""?hideStyle:this.state.styles} >
                <h2 style={this.props.mystyle}>
                  {this.props.text}            
            </h2>
            </button>

        )
    }
  }
export default Cell
