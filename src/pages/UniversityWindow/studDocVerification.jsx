import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
 

const studData = [
    {
        stud_name: "Van Raj Thakur",
        stud_reg_no: "12111596",
        certificates: [
            {
                certificate_id: 34678.0,
                certificate_name: "Income Certificate",
                certificate_status: "Verified",
                certificate_link:""
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Metric Result",
                certificate_status: "Pending",
                certificate_link:""
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Aadhar Card",
                certificate_status: "Verified",
                certificate_link:""
            },
            {
                certificate_id: 34678.0,
                certificate_name: "PAN Card",
                certificate_status: "Verified",
                certificate_link:""
            },
        ],
    },
];

const StudDocVerification = () => {
    
//     axios().get('https://6cc4-210-89-61-52.ngrok-free.app/institute/get-student-list')
//   .then(function (res) {
//         studData = res;
//     console.log(res);
//   })

    const [certificateStatus, setCertificateStatus] = useState({});
    const [savedCertificateStatus, setSavedCertificateStatus] = useState(null); // New state variable

    const handleStatusChange = (certificateName, status) => {
        setCertificateStatus((prevStatus) => ({
            ...prevStatus,
            [certificateName]: status,
        }));
    };

    useEffect(() => {
        localStorage.setItem("certificateStatusData", JSON.stringify(certificateStatus));
    }, [certificateStatus]);

    useEffect(() => {
        const savedData = localStorage.getItem("certificateStatusData");
        if (savedData) {
            setSavedCertificateStatus(JSON.parse(savedData));
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="mt-16">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Student Details
                        </h3>
                        <div className="mt-5 border-t border-gray-200">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Student Name
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {studData[0].stud_name}
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Registration Number
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {studData[0].stud_reg_no}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Certificates
                        </h3>
                        <div className="mt-5 border-t border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Certificate Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Certificate Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Certificate Link
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {studData[0].certificates.map((certificate) => (
                                        <tr key={certificate.certificate_id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {certificate.certificate_name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <select
                                                    className="border border-gray-300 rounded-md p-2"
                                                    value={
                                                        certificateStatus[certificate.certificate_name] ||
                                                        certificate.certificate_status
                                                    }
                                                    onChange={(e) =>
                                                        handleStatusChange(
                                                            certificate.certificate_name,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="Verified">Verified</option>
                                                    <option value="Not Verified">Not Verified</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <a href={certificate.certificate_link}>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                        View Certificate
                                                    </button>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudDocVerification;

