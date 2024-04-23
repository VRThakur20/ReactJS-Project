import React from "react";
import { Link } from "react-router-dom";
import TableRow from "./listOfSchemesRow.jsX";
import TableHead from "./listOfSchemesHead.jsx";

export default function listOfSchemes(props) {
  const schemes = props.schemes;

  return (
    <div className="relative m-10 shadow">
      <table className="max-w-full shadow text-sm text-left dark:text-gray-400">
        <TableHead />
        <tbody>
          {schemes.map((ele, index) => {
            console.log(ele);
            return (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <Link to="/dashboard/scheme">{index + 1}</Link>
                </td>
                <td className="border px-4 py-2">
                  <Link to="/dashboard/scheme">{ele.name}</Link>
                </td>
                <td className="border px-4 py-2">{ele.description}</td>
                <td className="border px-4 py-2">{ele.eligible}</td>
                <td className="border px-4 py-2">{ele.registration_deadline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
