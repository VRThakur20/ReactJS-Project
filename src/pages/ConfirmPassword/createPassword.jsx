import Navbar from "../../components/navbar/Navbar.jsx";
import ConfirmPass from "../../components/forms/forms.jsx";
import Photo from "../../assets/SignupPage.svg"
import "./createPassword.css";


const email = () =>{
    return(
        <>
        <div className="">
            <Navbar />
           
            </div>
            <div className="aadharForm flex gap-20 items-center">
                <div className="flex flex-col">
                <h1 className="font-mainFont text-4xl font-bold text-mainBlue mt-10 mb-10 pageTitle3"> Create A Password</h1>
            <ConfirmPass  isCreatePassword={true}></ConfirmPass>
            </div>
            <img src={Photo}></img>
            </div>

        </>
    )
}
export default email;