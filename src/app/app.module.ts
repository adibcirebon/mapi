import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {SalaryComponent} from './salary/salary.component';
import {AbsenComponent} from './absen/absen.component';
import {LeavesComponent} from './leaves/leaves.component';
import {PerformanceComponent} from './performance/performance.component';
import {HealthComponent} from './health/health.component';
import {TrainingComponent} from './training/training.component';
import {InfoComponent} from './info/info.component';
import {HomeComponent} from './home/home.component';
import {AbsensiComponent} from './salary/absensi/absensi.component';
import {PendapatanComponent} from './salary/pendapatan/pendapatan.component';
import {KaryawanService} from './shared/karyawan.service';
import {MaterializeModule} from 'angular2-materialize';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'salary', component: SalaryComponent,
    children: [
      {path: 'absen', component: AbsensiComponent},
      {path: 'pendapatan', component: PendapatanComponent}
    ]
  },
  {path: 'absen', component: AbsenComponent},
  {path: 'leaves', component: LeavesComponent},
  {path: 'performance', component: PerformanceComponent},
  {path: 'health', component: HealthComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SalaryComponent,
    AbsenComponent,
    LeavesComponent,
    PerformanceComponent,
    HealthComponent,
    TrainingComponent,
    InfoComponent,
    HomeComponent,
    AbsensiComponent,
    PendapatanComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [KaryawanService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
