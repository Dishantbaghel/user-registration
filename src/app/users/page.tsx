"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  fatherName: string;
  motherName: string;
  address: string;
  pincode: string;
  country: string;
}

const Users = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>("/api/getuser");
      setUserData(res.data);
      console.log(res, "res");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="w-full bg-slate-400 text-center text-4xl py-4">Users Details</div>
      {userData.length > 0 && (
        <div>
          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">First Name</th>
                <th className="border p-2">Last Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Father Name</th>
                <th className="border p-2">Mother Name</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Pincode</th>
                <th className="border p-2">Country</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item) => (
                <tr key={item.id} className="border">
                  <td className="border p-2">{item.firstName}</td>
                  <td className="border p-2">{item.lastName}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.fatherName}</td>
                  <td className="border p-2">{item.motherName}</td>
                  <td className="border p-2">{item.address}</td>
                  <td className="border p-2">{item.pincode}</td>
                  <td className="border p-2">{item.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
