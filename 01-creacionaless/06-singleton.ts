/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";

class DragonBolls {
  private static instance: DragonBolls; // Una sola instancia
  private ballCollected: number;

  private constructor() {
    this.ballCollected = 0;
  }

  //creamos una funcion para obtener solo una instancia
  public static getInstance(): DragonBolls {
    if (!DragonBolls.instance) {
      DragonBolls.instance = new DragonBolls();
      console.log("\n");
      console.log("%cLas pelotas del dragon han sido creadas!", COLORS.green);
    }
    return DragonBolls.instance;
  }

  collectBoll(): void {
    if (this.ballCollected < 7) {
      console.log(
        "%cTe faltan bolas[",
        COLORS.red,
        this.ballCollected,
        "]",
      );
      this.ballCollected++;
      console.log("%cPelota recolectada", COLORS.green, this.ballCollected,"+");
      return;
    }
    console.log("%cYa recolectaste todas las bolas", COLORS.yellow);
    console.log("%cllama al dragon", COLORS.blue);
  }

  summonShenlong() {
    if (this.ballCollected === 7) {
          console.log("\n");
      console.log("%cShenlong ha sido invocado, pide tu deseo!",COLORS.blue);
      this.ballCollected = 0;
      console.log("\n");
      return;
    }
    console.log(
      "%cTe faltan bolas :( ",
      COLORS.red,
      7 - this.ballCollected,
      "Para invocar a Shenlong ",``
    );
    console.log("\n");
  }
}

function main() {
  const gokuDragonBoll = DragonBolls.getInstance();
  gokuDragonBoll.collectBoll();
  gokuDragonBoll.collectBoll();
  gokuDragonBoll.collectBoll();

  gokuDragonBoll.summonShenlong();

  const vegetaDragonBoll = DragonBolls.getInstance();
  vegetaDragonBoll.collectBoll();
  vegetaDragonBoll.collectBoll();
  vegetaDragonBoll.collectBoll();
  vegetaDragonBoll.collectBoll();
   vegetaDragonBoll.summonShenlong();
  const fricerDragonBoll = DragonBolls.getInstance();


  fricerDragonBoll.summonShenlong();
}

main();
