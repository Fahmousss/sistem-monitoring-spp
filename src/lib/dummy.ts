export interface Mahasiswa {
  id: number;
  nama: string;
  semester: string;
  nim: string;
  prodi: string;
  angkatan: number;
  ukt: {
    biaya: number;
    status_pembayaran: "Lunas" | "Belum Lunas";
    metode_pembayaran: string | null;
    jumlah_pembayaran: number;
    waktu_pembayaran: string | null;
  };
}

export interface Fakultas {
  id: number;
  nama: string;
  mahasiswa: Mahasiswa[];
}

export const dataFakultas: Fakultas[] = [
  {
    id: 1,
    nama: "Fakultas Teknik",
    mahasiswa: [
      {
        id: 101,
        nama: "Ahmad Setiawan",
        semester: "1",
        nim: "22011001",
        prodi: "Teknik Informatika",
        angkatan: 2022,
        ukt: {
          biaya: 7500000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Transfer Bank",
          jumlah_pembayaran: 7500000,
          waktu_pembayaran: "2025-02-10 10:30:00"
        }
      },
      {
        id: 102,
        nama: "Dina Lestari",
        semester:"1",
        nim: "22011002",
        prodi: "Teknik Elektro",
        angkatan: 2022,
        ukt: {
          biaya: 7000000,
          status_pembayaran: "Belum Lunas",
          metode_pembayaran: null,
          jumlah_pembayaran: 0,
          waktu_pembayaran: null
        }
      },
      {
        id: 103,
        nama: "Rizky Saputra",
        semester:"2",
        nim: "22011003",
        prodi: "Teknik Mesin",
        angkatan: 2022,
        ukt: {
          biaya: 7200000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Virtual Account",
          jumlah_pembayaran: 7200000,
          waktu_pembayaran: "2025-02-11 11:15:00"
        }
      }
    ]
  },
  {
    id: 2,
    nama: "Fakultas Ekonomi dan Bisnis",
    mahasiswa: [
      {
        id: 201,
        nama: "Bayu Pratama",
        semester:"1",
        nim: "22021001",
        prodi: "Manajemen",
        angkatan: 2022,
        ukt: {
          biaya: 6500000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Virtual Account",
          jumlah_pembayaran: 6500000,
          waktu_pembayaran: "2025-02-05 14:45:00"
        }
      },
      {
        id: 202,
        nama: "Citra Dewi",
        semester:"1",
        nim: "22021002",
        prodi: "Akuntansi",
        angkatan: 2022,
        ukt: {
          biaya: 6700000,
          status_pembayaran: "Belum Lunas",
          metode_pembayaran: null,
          jumlah_pembayaran: 0,
          waktu_pembayaran: null
        }
      },
      {
        id: 203,
        nama: "Indra Gunawan",
        semester:"2",
        nim: "22021003",
        prodi: "Ekonomi Pembangunan",
        angkatan: 2022,
        ukt: {
          biaya: 6800000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Transfer Bank",
          jumlah_pembayaran: 6800000,
          waktu_pembayaran: "2025-02-12 09:30:00"
        }
      }
    ]
  },
  {
    id: 3,
    nama: "Fakultas Ilmu Komputer",
    mahasiswa: [
      {
        id: 301,
        nama: "Siti Rahma",
        semester:"1",
        nim: "22031001",
        prodi: "Sistem Informasi",
        angkatan: 2022,
        ukt: {
          biaya: 7300000,
          status_pembayaran: "Belum Lunas",
          metode_pembayaran: null,
          jumlah_pembayaran: 0,
          waktu_pembayaran: null
        }
      },
      {
        id: 302,
        nama: "Fajar Maulana",
        semester:"2",
        nim: "22031002",
        prodi: "Ilmu Komputer",
        angkatan: 2022,
        ukt: {
          biaya: 7400000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "E-Wallet",
          jumlah_pembayaran: 7400000,
          waktu_pembayaran: "2025-02-13 15:20:00"
        }
      }
    ]
  },
  {
    id: 4,
    nama: "Fakultas Kedokteran",
    mahasiswa: [
      {
        id: 401,
        nama: "Anisa Putri",
        semester:"1",
        nim: "22041001",
        prodi: "Pendidikan Dokter",
        angkatan: 2022,
        ukt: {
          biaya: 15000000,
          status_pembayaran: "Belum Lunas",
          metode_pembayaran: null,
          jumlah_pembayaran: 0,
          waktu_pembayaran: null
        }
      },
      {
        id: 402,
        nama: "Doni Saputra",
        semester:"2",
        nim: "22041002",
        prodi: "Kedokteran Gigi",
        angkatan: 2022,
        ukt: {
          biaya: 14000000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Transfer Bank",
          jumlah_pembayaran: 14000000,
          waktu_pembayaran: "2025-02-14 08:00:00"
        }
      },
      {
        id: 402,
        nama: "Doni Saputra",
        semester:"1",
        nim: "22041002",
        prodi: "Kedokteran Gigi",
        angkatan: 2022,
        ukt: {
          biaya: 14000000,
          status_pembayaran: "Lunas",
          metode_pembayaran: "Transfer Bank",
          jumlah_pembayaran: 14000000,
          waktu_pembayaran: "2025-02-14 08:00:00"
        }
      }
    ]
  }
];
