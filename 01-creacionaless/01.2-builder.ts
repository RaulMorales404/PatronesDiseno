/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import { COLORS } from "../helpers/colors.ts";

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 *
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solución

class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    const field: string[] = fields.length ? [...fields] : ["*"];
    this.fields = field;
    return this;
  }

  where(condition: string): QueryBuilder {
    const data: string[] = [];
    this.conditions.push(...(condition ? [condition] : []));
    data.push([...this.conditions].toString().replace(",", "  and "));
    this.conditions = data;
    return this;
  }

  orderBy(field: string, direction: "ASC" | "DESC" = "ASC"): QueryBuilder {
    const transdormData: string = `${field} ${direction}`;
    this.orderFields = [transdormData];
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    const quiery = `Select ${this.fields} from ${this.table}  ${
      this.conditions.length ? "Where " + this.conditions : ""
    } ${this.orderFields.length ? "order by " + this.orderFields : ""} ${
      this.limitCount ? "limit " + this.limitCount : ""
    } 
    `;
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    return quiery;
  }
}

function main() {
  const usersQuery = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'") // Esto debe de hacer una condición AND
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  const usersQuery2 = new QueryBuilder("Products")
    .select()
    .where("price > 500")
    .where("status = 'today'") // Esto debe de hacer una condición AND
    .orderBy("name", "DESC")
    .limit(10)
    .execute();

  console.log("%cConsulta:\n", COLORS.red);
  console.log(usersQuery);
  console.log(usersQuery2);
}

main();
