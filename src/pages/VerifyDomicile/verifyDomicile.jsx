import Navbar from "../../components/navbar/Navbar.jsx";
import Domicileverify from "../../components/forms/forms.jsx";
import Photo from "../../assets/uploadImage.png"
import "./verifyDomicile.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className=" ">
            <Navbar />
            </div>
            <h1 className="font-mainFont text-4xl font-bold text-mainBlue mb-10 mt-10 pageTitle"> Verify Domicile Certificate</h1>
                <div className="w-full max-w-sm formBox2">
                    
            <Domicileverify  isDomicile={true} handleSubmit={()=>{
            
            }}></Domicileverify>
            
            </div>
            
          

        </>
    )
}
export default email;