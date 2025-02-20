// components/columns.tsx
"use client";

import { Mahasiswa } from "@/lib/dummy";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// Define the data type based on your existing structure
// export type Mahasiswa = {
//   id: string;
//   nama: string;
//   nim: string;
//   semester: number;
//   prodi: string;
//   ukt: {
//     biaya: string;
//     status_pembayaran: string;
//   };
// };

export const columns: ColumnDef<Mahasiswa>[] = [
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nim",
    header: "NIM",
  },
  {
    accessorKey: "semester",
    header: "Semester",
  },
  {
    accessorKey: "prodi",
    header: "Program Studi",
  },
  {
    accessorKey: "ukt.biaya",
    header: "UKT",
  },
  {
    accessorKey: "ukt.status_pembayaran",
    header: "Status Pembayaran",
    cell: ({ row }) => {
      const status = row.original.ukt.status_pembayaran;
      return (
        <div className={status === "Lunas" ? "text-green-600" : "text-red-600"}>
          {status}
        </div>
      );
    },
  },
];
