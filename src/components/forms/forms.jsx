import { bool } from "prop-types";
import React from "react";
import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
export default function forms(props) {
  const [hide, setHide] = useState(1);
  function validate() {
    const validating = document.querySelectorAll(".preSubmit");
    var flag = true;
    validating.forEach((ele) => {
      if (ele.value === null || ele.value.length === 0) {
        flag = false;
      }
    });

    return flag;
  }
  function handleOtp() {
    if (validate()) {
      setHide(0);
    }
  }
  if (props.isAadhar == true) {
    return (
      <div className="w-full max-w-sm font-mainFont">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="middlename"
            >
              Middle Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="middlename"
              type="text"
              placeholder="Middle Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700  text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>

          <div
            className="mb-4
    "
          >
            <label
              className="block text-gray-700 text-sm  font-bold mb-2"
              htmlFor="aadhar"
            >
              Aadhar Number
            </label>
            <div className="flex gap-10">
              <input
                className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="aadhar"
                type="text"
                placeholder="Aadhar Number"
                required
              />

              <p className="cursor-pointer" onClick={handleOtp}>
                GetOtp
              </p>
            </div>
            <div className="mb-4" hidden={hide} id="otpdiv">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 otp"
                htmlFor="otp"
              >
                Enter OTP
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter OTP"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <button
              className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={props.handleSubmit}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
  if (props.isEmail == true) {
    return (
      <div className="w-full max-w-sm font-mainFont">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email ID
            </label>
            <div className="flex gap-5 items-center">
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your Email ID"
                required
              />

              <p className="cursor-pointer" onClick={handleOtp}>
                GetOtp
              </p>
            </div>
          </div>
          <div className="mb-4" hidden={hide}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              OTP
            </label>
            <div className="flex gap-5 items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter your OTP"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <button
              className="bg-mainBlue  w-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="button"
              onClick={props.handleSubmit}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
  if (props.isCreatePassword == true) {
    return (
      <div className="w-full max-w-sm font-mainFont">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="createPassword"
            >
              Choose a Password
            </label>
            <div className="flex gap-5 items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="createPassword"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="flex gap-5 items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="mb-4" hidden={true}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              OTP
            </label>
            <div className="flex gap-5 items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter your OTP"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <button
              className="bg-mainBlue  w-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Confirm Sign-Up
            </button>
          </div>
        </form>
      </div>
    );
  }
  if (props.isDlVerification == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="middlename"
              >
                Middle Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="middlename"
                type="text"
                placeholder="Middle Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div
              className="mb-4
    "
            >
              <label
                className="block text-gray-700 text-sm  font-bold mb-2"
                htmlFor="dl"
              >
                DL Number
              </label>
              <div className="flex gap-10">
                <input
                  className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dl"
                  type="text"
                  placeholder="DL Number"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Driving Licence
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center inputBox">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  if (props.isPAN == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="middlename"
              >
                Middle Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="middlename"
                type="text"
                placeholder="Middle Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div
              className="mb-4
    "
            >
              <label
                className="block text-gray-700 text-sm  font-bold mb-2"
                htmlFor="pan"
              >
                PAN Number
              </label>
              <div className="flex gap-10">
                <input
                  className="shadow appearance-none preSubmit border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pan"
                  type="text"
                  placeholder="PAN Number"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload PAN Card
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center inputBox">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  if (props.isDomicile == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="certificateno"
              >
                Certificate Number
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="certificateno"
                type="text"
                placeholder="Certificate Number"
                required
              />
            </div>
            <div className="mb-4">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Certificate
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center inputBox">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={props.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <form />
      </>
    );
  }
  if (props.isIncome == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="certificateno"
              >
                Certificate Number
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="certificateno"
                type="text"
                placeholder="Certificate Number"
                required
              />
            </div>
            <div className="mb-4">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Certificate
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center inputBox">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={props.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <form />
      </>
    );
  }
  if (props.isEdu == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Rollno"
              >
                Roll Number
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Rollno"
                type="text"
                placeholder="Roll Number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mothername"
              >
                Mother's Name
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mothername"
                type="text"
                placeholder="Mother's Name"
                required
              />
            </div>
            <div className="mb-4">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload Certificate
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center inputBox">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={props.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <form />
      </>
    );
  }
  if (props.isLogin == true) {
    return (
      <>
        <div className="w-full max-w-sm font-mainFont">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow preSubmit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Enter Your Password
              </label>
              <div className="flex gap-5 items-center">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={props.handleSubmit}
              >
                Login
              </button>
              <a href="/login/register">
              <button
                className="bg-mainBlue  text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={props.handleSubmit}
              >
                SignUp
              </button>
              </a>
              
            </div>
          </form>
        </div>
        <form />
      </>
    );
  }
}
