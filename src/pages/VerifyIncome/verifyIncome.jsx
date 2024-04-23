import Navbar from "../../components/navbar/Navbar.jsx";
import Incomeverify from "../../components/forms/forms.jsx";

import "./verifyIncome.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className=" ">
            <Navbar />
            </div>
            <h1 className="font-mainFont text-4xl font-bold text-mainBlue mt-10 mb-10 pageTitle"> Verify  Income Certificate</h1>
           
                <div className="w-full max-w-sm formBox2">
                    
            <Incomeverify  isIncome={true} handleSubmit={()=>{
            
            }}></Incomeverify>
            
            </div>
            
          

        </>
    )
}
export default email;