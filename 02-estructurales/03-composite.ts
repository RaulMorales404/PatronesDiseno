import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 */

interface FileSistemComponent {
  showDetail(indent?: string): void;
}

class File implements FileSistemComponent {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  showDetail(indent?: string): void {
    console.log(`${indent} - Archivo ${this.name}`);
  }
}

class Folder implements FileSistemComponent {
  private name: string;
  private contents: FileSistemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(content: FileSistemComponent) {
    this.contents.push(content);
  }

  showDetail(indent: string = " "): void {
    console.log(`${indent}+ %cCarpeta `,COLORS.blue,`${this.name}`);
    this.contents.forEach((contet) => contet.showDetail(indent + " "));
  }
}

function main() {
  const file1 = new File("Archivo1.txt");
  const file2 = new File("Archivo2.txt");
  const file3 = new File("Archivo3.txt");
  const file4 = new File("Archivo4.txt");
  const file5 = new File("Archivo5.txt");

  const folder1 = new Folder("Carpeta 1");
  folder1.add(file1);
  folder1.add(file2);

  folder1.showDetail();

  const folder2 = new Folder("Carpeta 2");
  folder2.add(file3);

  const folder3 = new Folder("Carpeta 3");
  folder3.add(file4);
  folder2.add(folder3);

  const folder5 = new Folder("Carpeta 5");
  folder5.add(file5)


  

  const rootFolder = new Folder("Carpeta Root");
  rootFolder.add(folder1);
  rootFolder.add(folder2);
  rootFolder.add(folder5);
  rootFolder.showDetail();

}

main();
