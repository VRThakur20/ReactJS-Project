import Navbar from "../../components/navbar/Navbar";
import pending from "../../assets/Images/pending.png";
import verified from "../../assets/Images/verified.png";
import verifyNow from "../../assets/Images/verifyNow.png";
import "./docVerify.css";
import axios from "axios";

axios.get("");

const docs = [
  {
    doc_name: "Aadhar Card",
    doc_status: "Verified",
    doc_logo_url: "https://www.google.com",
    doc_number: "123456789012",
    doc_id: "123",
    "access-token": "123456",
    doc_v: "#",
  },
  {
    doc_name: "PAN Card",
    doc_status: "Verified",
    doc_logo_url: "https://www.google.com",
    doc_number: "123456789012",
    doc_id: "123",
    "access-token": "123456",
    doc_v: "#",
  },
  {
    doc_name: "Metric Result",
    doc_status: "Not Verified",
    doc_logo_url: "https://www.google.com",
    doc_number: "",
    doc_id: "123",
    "access-token": "123456",
    doc_v: "#",
  },
  {
    doc_name: "Caste Certificate",
    doc_status: "Pending",
    doc_logo_url: "https://www.google.com",
    doc_number: "",
    doc_id: "123",
    "access-token": "123456",
    doc_v: "#",
  },
  {
    doc_name: "Domicile Certificate",
    doc_status: "Pending",
    doc_logo_url: "https://www.google.com",
    doc_number: "",
    doc_id: "123",
    "access-token": "123456",
    doc_v: "#",
  },
];

const myDocsPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
          {docs.map((element) => {
            let docStatusElement = null;
            if (element.doc_status === "Verified") {
              docStatusElement = (
                <img
                  className="pendingImage"
                  src={verified}
                  alt="Pending"
                ></img>
              );
              return (
                <div
                  key={element.doc_name}
                  className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
                >
                  <span className="p-5 rounded-full bg-lightBlue text-white shadow-lg shadow-red-200">
                    <img
                      src={element.doc_logo_url}
                      alt={element.doc_name}
                    ></img>
                  </span>
                  <p className="text-xl font-medium text-slate-700 mt-3">
                    {element.doc_name} - {element.doc_number}
                  </p>
                  <div>{docStatusElement}</div>
                </div>
              );
            }
            if (element.doc_status === "Pending") {
              docStatusElement = (
                <img className="pendingImage" src={pending} alt="Pending"></img>
              );
              return (
                <div
                  key={element.doc_name}
                  className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
                >
                  <span className="p-5 rounded-full bg-lightBlue text-white shadow-lg shadow-red-200">
                    <img
                      className=""
                      src={element.doc_logo_url}
                      alt={element.doc_name}
                    ></img>
                  </span>
                  <p className="text-xl font-medium text-slate-700 mt-3">
                    {element.doc_name}
                  </p>
                  <div>{docStatusElement}</div>
                </div>
              );
            }
            if (element.doc_status === "Not Verified") {
              docStatusElement = (
                <img
                  className="pendingImage"
                  src={verifyNow}
                  alt="Pending"
                ></img>
              );
              return (
                <div
                  key={element.doc_name}
                  className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer"
                >
                  <span className="p-5 rounded-full bg-lightBlue text-white shadow-lg shadow-red-200">
                    <img
                      className=""
                      src={element.doc_logo_url}
                      alt={element.doc_name}
                    ></img>
                  </span>
                  <p className="text-xl font-medium text-slate-700 mt-3">
                    {element.doc_name}
                  </p>
                  <div className=" ">{docStatusElement}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default myDocsPage;
