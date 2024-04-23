import Navbar from "../../components/navbar/Navbar.jsx";
import PANverify from "../../components/forms/forms.jsx";

import "./verifyPan.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className=" ">
            <Navbar />
            <h1 className="font-mainFont text-4xl font-bold text-mainBlue mt-10 mb-10 pageTitle2"> Verify PAN</h1>
            </div>
           
                <div className="w-full max-w-sm formBox">
                    
            <PANverify  isPAN={true} handleSubmit={()=>{
            
            }}></PANverify>
            
            </div>
            
          

        </>
    )
}
export default email;