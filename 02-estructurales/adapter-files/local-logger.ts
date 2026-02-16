import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LocalLogger Class

export class localLoger {
  constructor(private file: string) {
  }

  writeLog(msj: string): void {
    console.log(`${this.file} %clog ${msj}`,COLORS.blue);
  }
  writeError(msj: string): void {
    console.log(`${this.file} %clog ${msj}`, COLORS.red);
  }
  writeWarning(msj: string): void {
    console.log(`${this.file} %clog ${msj}`,COLORS.yellow);
  }
}
