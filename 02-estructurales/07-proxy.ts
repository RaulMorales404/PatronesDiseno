import { loadEnvFile } from "node:process";
import { COLORS } from "../helpers/colors.ts";

/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 */
class Player {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

interface Room {
  enter(player: Player): void;
}

class SecretRoom implements Room {
  enter(player: Player): void {
    console.log(`%cBienvenido a la sala secreta, ${player.name}`, COLORS.blue);
    console.log(`Un enemigo de espera`);
  }
}

// Clase proxy
class MagicPortal implements Room {
  private secretRom: Room;

  constructor(room: Room) {
    this.secretRom = room;
  }

  enter(player: Player): void {
    if (player.level >= 10) {
      this.secretRom.enter(player);
      return;
    }
    console.log(
      `Losiento tu nivel %c${player.level} es muy bajo requerido 10`,
      COLORS.red,
    );
  }
}

function main() {
  const portal = new MagicPortal(new SecretRoom());

  const player1 = new Player("Zelda 1", 6);
  const player2 = new Player("Rugaal", 10);
  portal.enter(player1);
  console.log("%cAventurero A intenta entrar al Portal", COLORS.green);
  portal.enter(player2);
  console.log("%cAventurero A intenta entrar al Portal", COLORS.green);
}

main();
