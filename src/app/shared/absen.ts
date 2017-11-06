import {Karyawan} from './karyawan';

export class AbsenKaryawan {
  karyawan: Karyawan;
  tanggal: Date;
  keterangan: string;
  prihal: Prihal;
}

export enum Prihal {
  SAKIT, IZIN, TANPA_KETERANGAN, CUTI
}
