import React from "react";

export class Pro extends React.Component{
      constructor(props){
      super(props)
      this.state={
          marks:0
      }


}

uploadMarks=()=>{
    
    console.log("it works")
    //this.state.marks=100 will not update the value
    let a=100;
    this.setState({marks:a})
}
render(){
    const{imageLinka,linkera,prodnamea,prodpricea,prodquanta}=this.props;
    return(
    <><div>
    <center><h1>Product Image :</h1> <img src={imageLinka} alt="noffound"></img></center>
    Product name: {prodnamea} <br></br>
    Buy : <a href={linkera}>Buy it now  </a>
    <br></br>
    Price : {prodpricea}<br></br>
    Product Quantity : {prodquanta}
    
    <input type="button" onClick="" id="minus" value="-"></input>
    <h2>My marks are :{this.state.marks}</h2>
    <button className="btn btn-primary" onClick={this.uploadMarks}>Click to Cheat in Marks</button>
    </div>




    </>
    )
}


}