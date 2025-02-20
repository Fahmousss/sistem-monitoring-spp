"use client";

import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-tables";
import { UktPieChart } from "@/components/dashboard/UktPieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataFakultas } from "@/lib/dummy";
import { Check, Users, X } from "lucide-react";

import { useState } from "react";

export default function Home() {
  const [selectedFakultas, setSelectedFakultas] = useState<string>("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const filteredMahasiswa = dataFakultas
    .filter(
      (fakultas) =>
        selectedFakultas === "all" || fakultas.nama === selectedFakultas
    )
    .flatMap((fakultas) => fakultas.mahasiswa)
    .filter(
      (mahasiswa) =>
        selectedSemester === "all" ||
        mahasiswa.semester.toString() === selectedSemester
    );

  const totalMahasiswa = filteredMahasiswa.length;
  const totalLunas = filteredMahasiswa.filter(
    (mhs) => mhs.ukt.status_pembayaran === "Lunas"
  ).length;
  const totalBelumLunas = totalMahasiswa - totalLunas;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
          Dashboard
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Pantau status pembayaran UKT mahasiswa berdasarkan fakultas dan
          semester
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <Select value={selectedFakultas} onValueChange={setSelectedFakultas}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Pilih Fakultas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Fakultas</SelectItem>
            {dataFakultas.map((fakultas) => (
              <SelectItem key={fakultas.id} value={fakultas.nama}>
                {fakultas.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedSemester} onValueChange={setSelectedSemester}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Pilih Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Semester</SelectItem>
            <SelectItem value="1">Semester 1</SelectItem>
            <SelectItem value="2">Semester 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center font-medium text-gray-500">
              <Users width={18} className="mr-2" /> Total Mahasiswa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">{totalMahasiswa}</p>
            <p className="text-xs text-gray-500 mt-1">
              Dari{" "}
              {selectedFakultas === "all"
                ? "seluruh program studi"
                : selectedFakultas}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center font-medium text-gray-500">
              <Check width={18} className="mr-2" /> Sudah Bayar UKT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold text-green-600">
              {totalLunas}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((totalLunas / totalMahasiswa) * 100).toFixed(1)}% dari total
              mahasiswa
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center font-medium text-gray-500">
              <X width={18} className="mr-2" /> Belum Bayar UKT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold text-red-600">
              {totalBelumLunas}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {((totalBelumLunas / totalMahasiswa) * 100).toFixed(1)}% dari
              total mahasiswa
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <UktPieChart
          totalMahasiswa={totalMahasiswa}
          totalLunas={totalLunas}
          totalBelumLunas={totalBelumLunas}
        />
        <Card className="md:col-span-3">
          <CardContent>
            <DataTable columns={columns} data={filteredMahasiswa} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
