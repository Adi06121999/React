import React from "react";
export class SampleCompo extends React.Component{
    constructor(props){
    super(props)

    }
    render(){
        const {age,fname}=this.props
        console.log(this.props);
        return(
            <div>
                <h1>Username:{fname}</h1>
                <h2>Age:{age}</h2>
            </div>
        )
    }
//export default sampleapp

}
