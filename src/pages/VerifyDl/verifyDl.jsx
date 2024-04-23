import Navbar from "../../components/navbar/Navbar.jsx";
import DLverify from "../../components/forms/forms.jsx";
import Photo from "../../assets/uploadImage.png"
import "./Dl.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className=" ">
            <Navbar />
            </div>
           <h1 className="font-mainFont text-4xl font-bold text-mainBlue mb-10 mt-10 pageTitle"> Verify Driving Licence</h1>
                <div className="w-full max-w-sm formBox">
                    
            <DLverify  isDlVerification={true} handleSubmit={()=>{
            
            }}></DLverify>
            
            </div>
            
          

        </>
    )
}
export default email;