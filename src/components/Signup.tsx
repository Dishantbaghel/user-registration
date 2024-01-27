"use client";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

const countries = ["INDIA", "USA", "JAPAN"];

const Signup = () => {
  const router = useRouter();
  const { handleChange, handleSubmit, resetForm, values } = useFormik({
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
    onSubmit: async (values) => {
      try {
        const res = await axios.post("/api/signup", values);
        if (res.status === 201) {
          router.push("/users");
          resetForm();
        }
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
          <form onSubmit={handleSubmit}>
            {[
              "firstName",
              "lastName",
              "email",
              "fatherName",
              "motherName",
              "address",
              "pincode",
            ].map((field : string) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "pincode"
                    ? "number"
                    : "text"
                }
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name={field}
                placeholder={field}
                onChange={handleChange}
                value={values[field]}
              />
            ))}

            <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                className="appearance-none w-full py-1 px-2 bg-white"
                name="country"
                id="country"
                value={values.country}
                onChange={handleChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
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
