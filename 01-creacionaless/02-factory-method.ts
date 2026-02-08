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

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cpollo", COLORS.yellow);
  }
}

class MeatHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando amburguesa de %ccarne", COLORS.red);
  }
}

class BeanHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando amburguesa de %cbean", COLORS.orange);
  }
}

abstract class Restaurant {
  protected abstract createHamburguer(): Hamburger;

  orderHamburguer(): void {
    const hamburguer = this.createHamburguer();
    hamburguer.prepare();
  }
}

class ChikenRestaurant extends Restaurant {
  override createHamburguer(): Hamburger {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburguer(): Hamburger {
    return new MeatHamburguer();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburguer(): Hamburger {
    return new BeanHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "Que tipo de hamburguesa quieres (chiken/beef/bean)",
  );

  switch (burgerType) {
    case "chiken":
      restaurant = new ChikenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "bean":
      restaurant = new BeanRestaurant();
      break;

    default:
      console.log("Opcion no %cvalida", COLORS.red);
      throw new Error("Opcion no valida");
  }
  restaurant.orderHamburguer();
}

main();
