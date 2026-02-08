/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

/**
 * 	!Descripción:
  1.	Completen las clases SalesReport e InventoryReport para implementar
      la interfaz Report, generando el contenido de cada reporte en el método generate.

  2.	Implementen las clases SalesReportFactory e InventoryReportFactory
      para crear instancias de SalesReport y InventoryReport, respectivamente.

	3.	Prueben el programa generando diferentes tipos de reportes usando
      el prompt para seleccionar el tipo de reporte.
 */

import { COLORS } from "../helpers/colors.ts";

interface Hear {
  playSong(): void;
}

class HearPop implements Hear {
  playSong(): void {
    console.log("Reproducione  %cPop", COLORS.white);
  }
}

class HearRegeton implements Hear {
  playSong(): void {
    console.log("Reproducione  Regeton", COLORS.cyan);
  }
}

class HearRock implements Hear {
  playSong(): void {
    console.log("Reproducione %cRock", COLORS.brown);
  }
}

abstract class Sporyfi {
  protected abstract playMusic(): Hear;

  play(): void {
    const song = this.playMusic();
    return song.playSong();
  }
}

class PopSong extends Sporyfi {
  override playMusic(): Hear {
    return new HearPop();
  }
}

class RegetonSong extends Sporyfi {
  override playMusic(): Hear {
    return new HearRegeton();
  }
}

class rockSong extends Sporyfi {
  override playMusic(): Hear {
    return new HearRock();
  }
}

function main() {
  let _itSong: Sporyfi;

  const songType = prompt("Que genero quieres escuchar(pp,regeton)");

  switch (songType) {
    case "pop":
      _itSong = new PopSong();

      break;
    case "regeton":
      _itSong = new RegetonSong();
      break;
    case "rock":
      _itSong = new rockSong();
      break;

    default:
      throw new Error();
  }

  _itSong.play();
}

main();
