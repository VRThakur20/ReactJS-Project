import React from "react";
import Navbar from "../../components/navbar/Navbar";

const studentData = [
    {
        stud_name: "Vedant Gaidhane",
        stud_reg_no: "12109500",
        certificates: [
            {
                certificate_id: 34678.0,
                certificate_name: "Income Certificate",
                certificate_status: "Verified",
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Metric Result",
                certificate_status: "Pending",
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Aadhar Card",
                certificate_status: "Verified",
            },
            {
                certificate_id: 34678.0,
                certificate_name: "PAN Card",
                certificate_status: "Verified",
            },
        ]
    },
    {
        stud_name: "Gurjot Singh",
        stud_reg_no: "12109499",
        certificates: [
            {
                certificate_id: 34678.0,
                certificate_name: "Caste Certificate",
                certificate_status: "Verified",
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Domicile Certificate",
                certificate_status: "Pending",
            },
            {
                certificate_id: 34678.0,
                certificate_name: "Metric Result",
                certificate_status: "Verified",
            }
        ]
    }
];

const TableHead = () => {
    return (
        <thead>
            <tr className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <th className="py-3 px-6 text-left">Sr. No.</th>
                <th className="py-3 px-6 text-left">Student Name</th>
                <th className="py-3 px-6 text-left">Registration Number</th>
                <th className="py-3 px-6 text-left">Certificates</th>
            </tr>
        </thead>
    );
};

const TableRow = ({ index, schemeName, schemeDescription, certificates }) => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100" onClick={() => window.location.href="/studDocVerification"}>
            <td className="py-3 px-6 text-left whitespace-nowrap">{index}</td>
            <td className="py-3 px-6 text-left">{schemeName}</td>
            <td className="py-3 px-6 text-left">{schemeDescription}</td>
            <td className="py-3 px-6 text-left">{certificates}</td>
        </tr>
    );
};

const UniWindow = () => {
    return (
        <>
            <Navbar />
            <div className="relative m-10 shadow">
                <table className="max-w-full w-full shadow text-sm text-left  dark:text-gray-400">
                    <TableHead />
                    <tbody>
                        {studentData.map((ele, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    index={index + 1}
                                    schemeName={ele.stud_name}
                                    schemeDescription={ele.stud_reg_no}
                                    certificates={
                                        <>
                                            {ele.certificates.map((certificate, index) => {
                                                return (
                                                    <li key={index}>{certificate.certificate_name} - {certificate.certificate_status}</li>
                                                );
                                            })}
                                        </>
                                    }
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UniWindow;
