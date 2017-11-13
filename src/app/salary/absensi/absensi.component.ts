import {Component, OnInit} from '@angular/core';
import {KehadiranKaryawan} from '../../shared/kehadiran-karyawan';
import {AbsenKaryawan} from '../../shared/absen';
import {Lembur} from '../../shared/lembur';
import {Karyawan} from '../../shared/karyawan';
import {KaryawanService} from '../../shared/karyawan.service';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.css']
})
export class AbsensiComponent implements OnInit {

  daftarBulan: string[] = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  empl: Karyawan;

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

  constructor(private karyawanService: KaryawanService) {
  }

  ngOnInit() {
    this.empl = this.karyawanService.karyawan;
    console.log(this.empl);
  }

}
