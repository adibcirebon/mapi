import {Injectable} from '@angular/core';

import {Karyawan} from './karyawan';
import {KehadiranKaryawan} from './kehadiran-karyawan';
import {AbsenKaryawan} from './absen';
import {Lembur} from './lembur';
import {KaryawanService} from './karyawan.service';

@Injectable()
export class KehadiranKaryawanService {

  constructor(private karyawanService: KaryawanService) {
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
    karyawan: this.karyawanService.karyawan,
    hadir: [
      {karyawan: this.karyawanService.karyawan, hari: new Date},
      {karyawan: this.karyawanService.karyawan, hari: new Date},
      {karyawan: this.karyawanService.karyawan, hari: new Date},
      {karyawan: this.karyawanService.karyawan, hari: new Date}
    ],
    absen: [],
    sakit: [],
    izin: [],
    lembur: [],
    cuti: []
  };

  addNewKehadiran() {
    this.kehadiran.hadir.push({
      karyawan: this.karyawanService.karyawan,
      hari: new Date
    });
  }
}
