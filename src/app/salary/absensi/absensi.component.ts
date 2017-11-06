import {Component, OnInit} from '@angular/core';
import {KehadiranKaryawan} from '../../shared/kehadiran-karyawan';
import {AbsenKaryawan, Prihal} from '../../shared/absen';
import {Lembur} from '../../shared/lembur';
import {Karyawan} from '../../shared/karyawan';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.css']
})
export class AbsensiComponent implements OnInit {

  daftarBulan: string[] = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  empl: Karyawan = {
    nama: 'Dimas Maryanto',
    jenisKelamin: 'Laki - Laki',
    alamat: 'Jl. Bukit Indah No B8',
    bio: 'I a Software Engineer from PT.Tabel data Informatika',
    nomorHandphone: '082117355133',
    tanggalLahir: new Date,
    tempatLahir: 'Bandung',
    nik: 12342134
  }

  kehadiran: {
    karyawan: Karyawan,
    hadir: KehadiranKaryawan[],
    absen: AbsenKaryawan[],
    sakit: AbsenKaryawan[],
    izin: AbsenKaryawan[],
    lembur: Lembur[],
    cuti: AbsenKaryawan[]
  } = {
    karyawan: this.empl,
    hadir: [
      {karyawan: this.empl, hari: new Date},
      {karyawan: this.empl, hari: new Date},
      {karyawan: this.empl, hari: new Date},
      {karyawan: this.empl, hari: new Date}
    ],
    absen: [],
    sakit: [],
    izin: [],
    lembur: [],
    cuti: []
  };

  constructor() {
  }

  ngOnInit() {
  }

}
