import {Component, OnInit} from '@angular/core';

import {Training} from './training.model';
import {Karyawan} from '../shared/karyawan';
import {KaryawanService} from '../shared/karyawan.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  selectedTraining: Training;
  karyawan: Karyawan;

  listTraining: Training[] = [
    new Training('SAP', new Date, 'Dewa'),
    new Training('Bisnis Analis', new Date, 'Putri')
  ];

  constructor(private karyawanService: KaryawanService) {
  }

  ngOnInit() {
    this.karyawan = this.karyawanService.karyawan;
  }

  setSelectedTraining(training: Training) {
    this.selectedTraining = training;
  }

  regiterTraining(reg: Training) {
    console.log(this.karyawan);
    console.log(reg);
  }
}
