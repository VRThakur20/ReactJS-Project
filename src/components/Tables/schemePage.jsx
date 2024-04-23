import { PaperClipIcon } from '@heroicons/react/20/solid'


export default function SchemePage(props) {

  const scheme = props.scheme;
  return (

    <>
        <div className=" bg-lightBlue flex justify-between px-4 sm:px-0 ">
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Scheme Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Scheme details and documents.</p>
          </div>
          <div className=" leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
          <button
          type="submit"
          onClick={() => window.location.href = '/dashboard/scheme/docverify'}
          className="rounded-md bg-mainBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Verify Required Documents
        </button>
        </div>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Scheme Name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ scheme.name }</dd>
            </div>
            <div className=" bg-lightBlue px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Scheme Description</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ scheme.description }</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Criteria</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ scheme.criteria }</dd>
            </div>
            <div className=" bg-lightBlue px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Documents Required</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <ol>
                            {scheme.documents.map((element) => {
                              return(
                                <>
                                  <li>{element}</li>
                                </>
                              );
                            })}
  
  
                              
                          </ol>
                  </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Ministry</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Ministry of Education</dd>
            </div>
          </dl>
        </div>
    </>
  )
}
