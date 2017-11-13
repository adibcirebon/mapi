import {Component, OnInit} from '@angular/core';
import {Karyawan} from '../shared/karyawan';
import {KaryawanService} from '../shared/karyawan.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  empl: Karyawan;

  constructor(private karyawanService: KaryawanService) {
  }

  ngOnInit() {
    this.empl = this.karyawanService.karyawan;
  }

  changedValue() {
    this.karyawanService.setNamaKaryawan('YUSUF');
  }
}
