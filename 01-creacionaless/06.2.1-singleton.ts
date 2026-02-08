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

import { confiManager } from "./singelton/config-manager.ts";

confiManager.setConfig("API", "www.http:google.com");
confiManager.setConfig("ENV_PRO", "Productio");
confiManager.setConfig("ENV_DEV", "Develop");
confiManager.setConfig("ENV_QA", "Testing");

console.log(confiManager.getAllConfig());

console.log("Api",confiManager.getConfig("API"));
