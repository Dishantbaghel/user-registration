"use client";
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import axios from "axios";

type Person = {
  name: {
    firstName: string;
    lastName: string;
    email: string;
    fatherName: string;
    motherName: string;
  };
  address: string;
  pincode: string;
  country: string;
};

const UsersTable = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/getuser");
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "fatherName",
        header: "Father Name",
        size: 150,
      },
      {
        accessorKey: "motherName",
        header: "Mother Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "pincode",
        header: "pincode",
        size: 150,
      },
      {
        accessorKey: "country",
        header: "country",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: userData,
  });

  return <MaterialReactTable table={table} />;
};

export default UsersTable;
