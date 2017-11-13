import {Component, OnInit} from '@angular/core';
import {KehadiranKaryawanService} from '../shared/kehadiran-karyawan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-absen',
  templateUrl: './absen.component.html',
  styleUrls: ['./absen.component.css']
})
export class AbsenComponent implements OnInit {

  constructor(private kehadiranService: KehadiranKaryawanService, private router: Router) {
  }

  ngOnInit() {
  }

  tambah() {
    this.kehadiranService.addNewKehadiran();
    console.log(this.kehadiranService.kehadiran.hadir.length);
    this.router.navigate(['salary', 'absen']);
  }
}
