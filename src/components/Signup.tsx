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
  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({
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
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-6 rounded shadow-lg text-black w-full">
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
            ].map((field: string) => (
              <div key={field}>
                <input
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
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}
            <div className="relative bg-white block border border-grey-light w-full p-3 rounded mb-4">
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
                {["INDIA", "USA", "JAPAN"].map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            {isLoader == true ? (
              <Box className="w-full flex justify-center">
                <CircularProgress />
              </Box>
            ) : (
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
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
