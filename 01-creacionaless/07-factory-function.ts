/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 */
// i18n

import { COLORS } from "../helpers/colors.ts";

// deno-lint-ignore-file no-dupe-keys
type language = "es" | "en" | "fr";

function createGereeter(lang: language) {
  return function (name: string) {
    const mesajes = {
      es: `Hola, %c${name}`,
      en: `hello, %c${name}`,
      fr: `Bonjor, %c${name}`,
    };

    return console.log(mesajes[lang], COLORS.green);
  };
}

function main() {
  const spanishGrereeter = createGereeter("es");
  const englishGrereeter = createGereeter("en");
  const frenchGrereeter = createGereeter("fr");

  spanishGrereeter("Kiko");
  englishGrereeter("Botas");
  frenchGrereeter("Paty");
}

main();
