import React from 'react'

export default function listOfSchemesHead() {
  return (
   
    <thead className="text-xs text-white uppercase bg-mainBlue dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
            Sr. No
        </th>
        <th scope="col" className="px-6 py-3">
          Schemes Name 
        </th>
        <th scope="col" className="px-6 py-3">
          Schemes Description
        </th>
        <th scope="col" className="px-6 py-3">
          Eligible For
        </th>
        <th scope="col" className="px-6 py-3">
          Apply Before
        </th>
      </tr>
    </thead>
    
  )
}
