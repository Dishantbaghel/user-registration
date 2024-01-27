"use client";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      fatherName: "",
      motherName: "",
      address: "",
      pincode: "",
      country: "INDIA",
    },
    onSubmit: async (values,{resetForm}) => {
      try {
        const res = await axios.post("/api/signup", values);
        if (res.status === 201) {
          router.push("/users");
          resetForm();
        }
        console.log(values);
        
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-5 text-3xl text-center">Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            {/* first name--------------- */}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {/* last name---------------------- */}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {/* email------------------------------- */}
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {/* fatherName------------------------------- */}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fatherName"
              placeholder="father Name"
              onChange={formik.handleChange}
              value={formik.values.fatherName}
            />

            {/* motherName------------------------------- */}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="motherName"
              placeholder="mother Name"
              onChange={formik.handleChange}
              value={formik.values.motherName}
            />
            {/* address------------------------------- */}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              placeholder="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />

            {/* pincode --------------- */}
            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="pincode"
              placeholder="pincode"
              onChange={formik.handleChange}
              value={formik.values.pincode}
            />
            <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                className="appearance-none w-full py-1 px-2 bg-white"
                name="country"
                id="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
                <option value="JAPAN">JAPAN</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
