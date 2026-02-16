/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from "../helpers/colors.ts";

interface Ability {
  user(): void;
}

class SwordAttack implements Ability {
  user(): void {
    console.log("%cAtaca con una espada ferozmente", COLORS.red);
  }
}

class WaterAttack implements Ability {
  user(): void {
    console.log("%cAtaca con su agua ahogando al rival", COLORS.orange);
  }
}

class MagicSpell implements Ability {
  user(): void {
    console.log("%cLanza un echizo mágico poderozo", COLORS.blue);
  }
}

class MagicSleepAtack implements Ability {
  user(): void {
    console.log("%cLanza un echizo para dormir Zzzzzz", COLORS.green);
  }
}

abstract class Character {
  protected ability: Ability;
  constructor(ability: Ability) {
    this.ability = ability;
  }
  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log(" ");
    console.log("El gerrero esta listo para luchar");
    this.ability.user();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log(" ");
    console.log("El Mago prepara su magia");
    this.ability.user();
  }
}
class Aldeant extends Character {
  override performAbility(): void {
    console.log(" ");
    console.log("El Aldeano prepara su Poder");
    this.ability.user();
  }
}

function main() {
  const warrios = new Warrior(new SwordAttack());
  warrios.performAbility();

  const axeAttack = new Mage(new MagicSpell());
  axeAttack.performAbility(); 

  const otherAttack = new Aldeant(new WaterAttack());
  otherAttack.performAbility();

  otherAttack.setAbility(new MagicSpell()); 
  otherAttack.performAbility();

   const aldeanAttack = new Aldeant(new MagicSleepAtack());
  aldeanAttack.performAbility();
}

main();
