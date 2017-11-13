import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {KehadiranKaryawanService} from '../shared/kehadiran-karyawan.service';

@Component({
  selector: 'app-absen',
  templateUrl: './absen.component.html',
  styleUrls: ['./absen.component.css']
})
export class AbsenComponent implements OnInit {

  constructor(private kehadiranService: KehadiranKaryawanService,
              private router: Router) {
  }

  ngOnInit() {
  }

  tambahMasuk() {
    this.kehadiranService.addNewKehadiran();
    console.log(this.kehadiranService.kehadiran.hadir.length);
    this.router.navigate(['salary', 'absen']);
  }

  tambahSakit(message: string) {
    this.kehadiranService.addNewSakit(message);
    this.router.navigate(['salary', 'absen']);
  }
}
