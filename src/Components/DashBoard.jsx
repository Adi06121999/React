export function DashBoard(props){
    //console.log(props.useremail)
    //console.log(props.username)
    const {username,email}=props
   return(
       <>
       
       <h1>Username : {username}</h1>
       <h2>Role: rolea</h2>
       <h3>Email: {email} </h3>
       </>
   )

}
//Product catalogue page
//can also use {props.username}