/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburguer {
  prepare(): void;
}

interface Drincks {
  Pour(): void;
}

class ChikenHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Creando amburgesa %cPollo", COLORS.yellow);
  }
}

class MeatHamburguer implements Hamburguer {
  prepare(): void {
    console.log("Creando amburgesa %cCarne", COLORS.red);
  }
}

class PepseDring implements Drincks {
  Pour(): void {
    console.log("sirviendo un vaso  %cPepsi", COLORS.blue);
  }
}

class FantaDring implements Drincks {
  Pour(): void {
    console.log("sirviendo un vaso  %cFanta", COLORS.orange);
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburguer;
  createDrink(): Drincks;
}

class FastRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburguer {
    return new MeatHamburguer();
  }
  createDrink(): Drincks {
    return new PepseDring();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburguer {
    return new ChikenHamburguer();
  }
  createDrink(): Drincks {
    return new FantaDring();
  }
}

function main(factory: RestaurantFactory){
  const hamburguer = factory.createHamburger();
  const drink = factory.createDrink();

  hamburguer.prepare();
  drink.Pour();
}

console.log('%cPedido del menú regular',COLORS.green)

main(new FastRestaurantFactory());

console.log('%cPedido del menú Rapido',COLORS.green)
main(new HealthyRestaurantFactory)
