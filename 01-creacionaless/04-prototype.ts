/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 *
 * * Es útil cuando queremos duplicar el contenido,
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 *
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  public title: string;
  private content: string;
  public autor: string;

  constructor(title: string, contet: string, autor: string) {
    this.title = title;
    this.content = contet;
    this.autor = autor;
  }

  clone():Document{

    return new Document(this.title,this.content,this.autor)

  }

  displayInfo() {
    console.log(" tile:", this.title);
    console.log(" content:", this.content);
    console.log(" autor:", this.autor);
  }
}

function main() {
  const document1 = new Document(
    "Cotizacion",
    "500 dólares",
    "hp",
  );
  console.log({ document1 });
  document1.displayInfo();

  const document2 = document1.clone();
  document2.title = "Nueva cotizacion";
  console.log({ document2 });
  document2.displayInfo();
}

main();
