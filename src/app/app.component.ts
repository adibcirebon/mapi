import {Component} from '@angular/core';
import {KaryawanService} from './shared/karyawan.service';
import {KehadiranKaryawanService} from "./shared/kehadiran-karyawan.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KaryawanService, KehadiranKaryawanService]
})
export class AppComponent {
  title = 'app';
}
