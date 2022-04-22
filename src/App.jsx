import {AppComp1} from "./Components/Appcomp1";
import {AppComp2} from "./Components/Appcomp2";
import {AppComp3} from "./Components/Appcomp3";
import { SampleCompo } from "./Components/Classcompo/SampleCompo";
import {DashBoard} from "./Components/DashBoard";
import {Product} from "./Components/Product";
import {Pro} from "./Components/Classcompo/Pro";
import {Counter} from "./Components/Classcompo/Counter";
import {Toggle} from "./Components/Classcompo/Toggle";
import {TaskManager} from "./Components/Classcompo/TaskManager";
function App() {
    return ( 
    <>
    <SampleCompo fname='aditya' age="12"></SampleCompo>
    <SampleCompo fname='adi' age="21"></SampleCompo>
    <Pro imageLinka="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" linkera="https://www.google.com" prodnamea="abc" prodpricea="100" prodquanta=" 0 "></Pro>
    <Counter></Counter>
    <Toggle></Toggle>
    <AppComp1/>
    <AppComp2/>
    <AppComp3/>

    <DashBoard username="Aditya Jain" email="aditya94121@gmail.com"></DashBoard>
    <Product imageLink="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" linker="https://www.google.com" prodname="abc" prodprice="100" prodquant=" 0 ">
       
    </Product>

    <TaskManager></TaskManager>
    
    </>

    )
}
export default App

//company name founders and employee recurit
//take as jsx attribute



