import React from 'react'

export default function listOfSchemesRow(props) {
    if(props.index%2!=0){
  return (
    <tr className="bg-lightBlue dark:bg-gray-800 dark:border-gray-700 schemeTable ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
        {props.index} 
        </th>
        <td className="px-6 py-4">{props.schemeName}</td>
        <td className="px-6 py-4">{props.schemeDescription}</td>
        <td className="px-6 py-4">{props.eligibleFor}</td>
        <td className=" date">{props.applyBefore}</td>
      </tr>
  )
    }
    else{
        return (
            <tr className="bg-mainGrey dark:bg-gray-800 dark:border-gray-700  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {props.index}
                </th>
                <td className="px-6 py-4">{props.schemeName}</td>
                <td className="px-6 py-4 ">{props.schemeDescription}</td>
                <td className="px-6 py-4">{props.eligibleFor}</td>
                <td className="date">{props.applyBefore}</td>
              </tr>
          )

    }
}
