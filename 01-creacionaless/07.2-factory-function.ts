/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 */

//! Salida esperada
//! Colocar colores de log según el nivel
//* [INFO:2025-10-21:07] Aplicación iniciada correctamente.
//* [WARNING:2025-10-21:07] El uso de memoria está alto.
//* [ERROR:2025-10-21:07] Error de conexión a la base de datos.
// deno-lint-ignore-file

 
import { COLORS } from "../helpers/colors.ts";

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses empiezan desde 0
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Función fábrica que crea un manejador de logs
type LogLevel = "info" | "warn" | "error";

function getColorMessaje(alert: LogLevel) {
  const colorCorrect = {
    info: COLORS.blue,
    warn: COLORS.yellow,
    error: COLORS.red,
  };

  return colorCorrect[alert];
}

function createLogger(level: LogLevel) {

  // Retorna una función que recibe el "message" como argumento
  // Completar: implementar el logger con formato y color para cada nivel
  return function factoryFunction(messaje: string) {
      const fecha = new Date();
    const showMessaje = {
      "info": `%c[INFO: ${formatDate(fecha)} ${messaje}]`,
      "warn": `%c[WARNING: ${formatDate(fecha)} ${messaje}]`,
      "error": `%c[ERROR: ${formatDate(fecha)} ${messaje}]`,
    };
    return console.log(showMessaje[level], getColorMessaje(level));
  };
}

// Ejemplo de uso
function main() {
  const infoLogger = createLogger("info");
  const warnLogger = createLogger("warn");
  const errorLogger = createLogger("error");

  infoLogger("Aplicación iniciada correctamente.");
  setTimeout(() => {
    warnLogger("El uso de memoria está alto.");
  }, 3200);
  setTimeout(() => {
    errorLogger("Error de conexión a la base de datos.");
  }, 5000);
}

main();
