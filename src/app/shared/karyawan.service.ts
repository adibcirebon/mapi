import {Karyawan} from './karyawan';

export class KaryawanService {
  karyawan: Karyawan = {
    nik: 10000,
    nama: 'Dimas Maryanto',
    jenisKelamin: 'Laki - Laki',
    tanggalLahir: new Date,
    nomorHandphone: '08212',
    tempatLahir: 'Bandung',
    bio: 'Software engineer',
    alamat: 'jl'
  };

  constructor() {
  }

  setNamaKaryawan(nama: string) {
    this.karyawan.nama = nama;
  }


}
