import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notification {
  send(message: string): void;
}

class BasicNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando notificacion básica: %c${message}`,COLORS.orange);
  }
}

abstract class NotificationDecoration implements Notification {
  protected notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  send(message: string): void {
    this.notification.send(message);
  }
}

class EmailDecorador extends NotificationDecoration {
  private setMessage(messaje: string) {
    console.log(`Enviando notificación por Correo: %c${messaje}`,COLORS.blue);
  }

  override send(message: string): void {
    super.send(message);
    this.setMessage(message);
  }
}

class SMSDecorador extends NotificationDecoration {
  private setSMS(messaje: string) {
    console.log(`Enviando notificación por SMS: %c${messaje}`,COLORS.pink);
  }

  override send(message: string): void {
    super.send(message);
    this.setSMS(message);
  }
}



function main(){
  let notification:Notification = new BasicNotification();
  notification = new EmailDecorador(notification);
  notification = new SMSDecorador(notification);

  notification.send('Alerta de sismo');

  const notificationConfig:Notification = new BasicNotification();
  notificationConfig.send('Hora de salida')


}


main();