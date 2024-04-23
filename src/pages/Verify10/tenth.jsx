import Navbar from "../../components/navbar/Navbar.jsx";
import Tenth from "../../components/forms/forms.jsx";
import Photo from "../../assets/uploadImage.png"
import "./tenth.css";
import { useNavigate } from "react-router-dom";


const email = () =>{
    
    const navigate=useNavigate();
    return(
        <>
        <div className=" ">
            <Navbar />
            <h1 className="font-mainFont text-4xl font-bold text-mainBlue mb-10 mt-10 pageTitle"> Verify Class 10 Certificate</h1>
            </div>
           
                <div className="w-full max-w-sm formBox2">
                    
            <Tenth  isEdu={true} handleSubmit={()=>{
            
            }}></Tenth>
            
            </div>
            
          

        </>
    )
}
export default email;