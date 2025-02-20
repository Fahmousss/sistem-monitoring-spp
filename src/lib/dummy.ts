export interface Mahasiswa {
  id: number;
  nama: string;
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
      }
    ]
  }
];
