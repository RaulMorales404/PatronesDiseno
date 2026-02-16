import { COLORS } from "../helpers/colors.ts";
/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Proyector {
  on() {
    console.log("Proyector encendido");
  }
  turnOff() {
    console.log("Proyector Apagado");
  }
}

class SoundSistem {
  on() {
    console.log("Sistema de sonido encendio");
  }

  off() {
    console.log("Sistema apagado");
  }
}

class PlayStation {
  on() {
    console.log("Consola de juegos encendida");
  }

  play(vieojuego: string) {
    console.log(`%cJugando ${vieojuego}`, COLORS.yellow);
  }

  stop() {
    console.log("Salir del juego");
  }
  off() {
    console.log("Consola apagada");
  }
}

class LicuaChela {
  onChela() {
    console.log("Licuadora encendida");
  }
  playLicua() {
    console.log("Licuando zzzzzzz");
  }
  stopBeberate() {
    console.log("Deteniendo lucuachela");
  }
}

interface PaamsAlexa {
  Proyector: Proyector;
  SoundSistem: SoundSistem;
  PlayStation: PlayStation;
  LicuaChela: LicuaChela;
}

abstract class EchoAlexa {
  protected Proyector: Proyector;
  protected SoundSistem: SoundSistem;
  protected PlayStation: PlayStation;
  protected LicuaChela: LicuaChela;

  constructor(params: PaamsAlexa) {
    this.LicuaChela = params.LicuaChela;
    this.PlayStation = params.PlayStation;
    this.Proyector = params.Proyector;
    this.SoundSistem = params.SoundSistem;
  }

  abstract watchMovie(movie: string): void;
  abstract endWachtinMovie(): void;
}

class Actions extends EchoAlexa {
  override watchMovie(movie: string): void {
    console.log(`%cPreparando para ver pelucula ${movie}`, COLORS.blue);
    this.Proyector.on();
    this.PlayStation.on();
    this.SoundSistem.on();
    this.LicuaChela.onChela();
    this.PlayStation.play(movie);
    console.log(` %cDisfruta el viedojuego`, COLORS.pink);
  }

  override endWachtinMovie(): void {
    this.Proyector.turnOff();
    this.PlayStation.off();
    this.SoundSistem.off();
    this.LicuaChela.stopBeberate();
    this.PlayStation.off();
    console.log(" %cApagando el videojuego ", COLORS.green);
  }
}

function main() {
  const alexa: EchoAlexa = new Actions({
    Proyector: new Proyector(),
    SoundSistem: new SoundSistem(),
    PlayStation: new PlayStation(),
    LicuaChela: new LicuaChela(),
  });

  alexa.watchMovie('Black Hack 2 Zombies');
  alexa.endWachtinMovie();


  
  
}

main();
