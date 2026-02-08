/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = "cpu no definido";
  public ram: string = "ram no definido";
  public storage: string = " Almacenar";
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuration de la computadora
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Almacenamiento: ${this.storage}
        ${this.gpu ? this.gpu : ``}
        `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU("intel Celeron")
    .setRAM("8GB")
    .setStorage("500GB SSD")
    .build();

  const gamerComputer: Computer = new ComputerBuilder()
    .setCPU("i9 then")
    .setRAM("128GB")
    .setStorage("1TB SSD")
    .setGPU("Nvidia RTX 4070")
    .build();

  console.log("%computer gamer", COLORS.green);
  gamerComputer.displayConfiguration();
  console.log("%computer gamer", COLORS.blue);
  basicComputer.displayConfiguration();
  basicComputer.gpu;
}

main();
