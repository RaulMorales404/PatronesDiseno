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

import { config } from "node:process";
import { COLORS } from "../helpers/colors.ts";

// 1. Interfaz NotificationChannel
// Define el método `send`, que cada canal de comunicación implementará.
interface NotificationChannel {
  send(message: string): void;
}

// 2. Implementaciones de Canales de Comunicación

class EmailChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando correo electrónico: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

class WhatsApp implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando WhatsApp: ${message}`);
  }
}

class PushNotificationChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Enviando Push: ${message}`);
  }
}

// 3. Clase Abstracta Notification
// Define la propiedad `channel` y el método `notify`

abstract class Notification {
  // TODO: Definir la propiedad `channel` de tipo NotificationChannel
  protected chanel: NotificationChannel[];

  // TODO: Definir el constructor de la clase
  constructor(chanel: NotificationChannel[]) {
    this.chanel =[...chanel];
  }

  abstract addChannel(chanel: NotificationChannel): void;

  abstract notify(message: string): void;

  // TODO: Definir el constructor de la clase
  // TODO: Definir el método `notify` y `setChannel` (abstractos)
}

class AlertNotification extends Notification {
  override addChannel(chanel: NotificationChannel): void {
    this.chanel = [];
    this.chanel.push(chanel);
  }
  override notify(message: string): void {
    console.log("Alerta %cEnviando notificaciones...", COLORS.yellow);
    this.chanel.map((notification: NotificationChannel) =>
      notification.send(message)
    );
  }
}

function main() {
  console.log("Hola munfo");
  const configNotification = new AlertNotification([
    new EmailChannel(),
    new SMSChannel(),
  ]);
  configNotification.notify("Alerta de sismo Corre en chinga");

  configNotification.addChannel(new WhatsApp());
  configNotification.notify("llegaron las tockeras");
  
  configNotification.addChannel(new PushNotificationChannel());
  configNotification.notify("El bolillo telera");
}

main();
