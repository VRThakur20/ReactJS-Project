import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState} from "react"
import govtList from '../lists/govtList'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example(props) {
    const stateList = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "(UT) Andaman and Nicobar Islands",
        "(UT) Chandigarh",
        "(UT) Dadra and Nagar Haveli and Daman & Diu",
        "(UT) The Government of NCT of Delhi",
        "(UT) Jammu & Kashmir",
        "(UT) Ladakh",
        "(UT) Lakshadweep",
        "(UT) Puducherry",
      ];
    
      const categoryList = [
        "SC - Scheduled Caste",
        "ST - Scheduled Tribe",
        "OBC - Other Backward Class",
        "GEN - General Category",
      ];
const [currentCaste,setCaste]=useState("Select a Caste")
const [currentState,setState]=useState("Select a State")
    if(props.isGovtList==true){
        return (
            <div className='object-center'>
                    <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {currentState}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>
        
                <Transition 
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {stateList.map((element,index) => {
                            return(
                                <>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                            )}
                                            onClick={()=>{
                                                setState(stateList[index]);
                                                props.handleGovtChange(index);

                                            }}
                                        
                                        >
                                            {element}
                                        </button>
                                        )}
                                    </Menu.Item>
                                </>
                            );
                        })}
                    </div>
                    </Menu.Items>
                </Transition>
                </Menu>
            </div>
          );
    };

    if(props.isCasteList==true){
        return (
            <div className='object-center'>
                    <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {currentCaste}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>
        
                <Transition 
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        
                        {categoryList.map((element,index) => {
                            return(
                                <>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                            )}
                                            onClick={()=>{
                                                setCaste(categoryList[index]);
                                                props.handleCaste(index);

                                            }}
                                        
                                        >
                                            {element}
                                        </button>
                                        )}
                                    </Menu.Item>
                                </>
                            );
                        })}
                    </div>
                    </Menu.Items>
                </Transition>
                </Menu>
            </div>
          );
    };
  
}
