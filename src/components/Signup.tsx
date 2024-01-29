"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";
import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("This field cannot be empty!"),
  lastName: Yup.string().min(2).max(25).required("This field cannot be empty!"),
  email: Yup.string().email().required("This field cannot be empty!"),
  fatherName: Yup.string()
    .min(2)
    .max(25)
    .required("This field cannot be empty!"),
  motherName: Yup.string()
    .min(2)
    .max(25)
    .required("This field cannot be empty!"),
  address: Yup.string().min(2).max(25).required("This field cannot be empty!"),
  pincode: Yup.number().integer().required("This field cannot be empty!"),
  country: Yup.string().min(2).max(25).required("This field cannot be empty!"),
});

const Signup = () => {
  const router = useRouter();
  const [isLoader, setIsLoader] = useState(false);
  const { handleChange, handleSubmit, resetForm, touched, values, errors } =
    useFormik<any>({
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
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        setIsLoader(true);
        try {
          const res = await axios.post("/api/signup", values);
          if (res.status === 201) {
            router.push("/users");
            resetForm();
          }
        } catch (error) {
          console.log(error);
          setIsLoader(false);
        }
      },
    });

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-6 rounded shadow-lg text-black w-full">
          <h1 className="mb-5 text-4xl text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-between max-sm:flex max-sm:flex-col "
          >
            {[
              "firstName",
              "lastName",
              "email",
              "fatherName",
              "motherName",
              "address",
              "pincode",
              "country",
            ].map((field: string) => (
              <div key={field} className="mb-6">
                <label htmlFor={field}>{field}</label>
                {field === "country" ? (
                    <select
                      className=" py-3 mt-1 px-12 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border rounded-md w-full"
                      name={field}
                      id={field}
                      value={values[field]}
                      onChange={handleChange}
                    >
                      {["INDIA", "USA", "JAPAN"].map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                ) : (
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "pincode"
                        ? "number"
                        : "text"
                    }
                    className="mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                    name={field}
                    placeholder={field}
                    onChange={handleChange}
                    value={values[field]}
                  />
                )}
                {touched[field] && errors[field] && (
                  <p className="mt-2 text-sm text-red-600">{errors[field]}</p>
                )}
              </div>
            ))}
            {isLoader == true ? (
              <Box className="w-full flex justify-center">
                <CircularProgress />
              </Box>
            ) : (
              <button
                type="submit"
                className="w-full text-center py-3 my-5 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none"
              >
                Create Account
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
