import {Component, OnInit} from '@angular/core';
import {Karyawan} from '../shared/karyawan';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {

  }

}
