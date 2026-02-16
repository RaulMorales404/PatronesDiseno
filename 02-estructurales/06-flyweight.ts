/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

import { COLORS } from "../helpers/colors.ts";

interface Location {
  display(coordinations: { x: number; y: number }): void;
}

class LocationIcon implements Location {
  private type: string; // objeto que usara el icono
  private iconImage: string;

  constructor(type: string, iconImagr: string) {
    this.iconImage = iconImagr;
    this.type = type;
  }
  // imagen del marcador
  display(coordinations: { x: number; y: number }): void {
    console.log(
      `Coords: ${this.type} en ${coordinations.x}, ${coordinations.y} con icono %c[${this.iconImage}]`,
      COLORS.blue,
    );
  }
}

//Fabrica de Flyweights

class LocationFactory {
  private icons: Record<string, LocationIcon> = {};

  // type, el objeto que sera utilizado
  getLocatioIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      console.log(  `Creando una nueva isntacia del icono %c${type}`, COLORS.yellow);
      const iconImage = `imagen_de_${type.toLocaleLowerCase()}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }
    return this.icons[type];
  }
}

class MapLocation {
  private coordinations: { x: number; y: number };
  private icon: LocationIcon;

  constructor(
    x: number,
    y: number,
    icon: LocationIcon,
  ) {
    this.coordinations = { x, y };
    this.icon = icon;
  }

  display() {
    this.icon.display(this.coordinations);
  }
}

function main() {
  const factory = new LocationFactory();
  const location = [
    new MapLocation(10, 20, factory.getLocatioIcon("Hospital")),
    new MapLocation(50, 10, factory.getLocatioIcon("Hospital")),
    new MapLocation(5, 10, factory.getLocatioIcon("Hospital")),
    new MapLocation(5, 10, factory.getLocatioIcon("Parque")),
      new MapLocation(5, 10, factory.getLocatioIcon("Hospital")),
        new MapLocation(5, 10, factory.getLocatioIcon("Escuela")),
  ];

  console.log(location.forEach((location) =>  location.display()));
}

main();
