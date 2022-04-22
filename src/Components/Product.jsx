export function Product(props){
    //console.log(props.useremail)
    //console.log(props.username)
    const{imageLink,linker,prodname,prodprice,prodquant}=props;
   return(
       <>
       
       <center><h1>Product Image :</h1> <img src={imageLink} alt="noffound"></img></center>
       Product name: {prodname} <br></br>
       Buy : <a href={linker}>Buy it now  </a>
       <br></br>
       Price : {prodprice}<br></br>
       Product Quantity : 
       <input type="button" onclick="" id="minus" value="-"></input>
       {prodquant}
       <input type="button" onclick="" id="plus" value="+"></input>
       </>
       
   )

}