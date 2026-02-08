/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 */

import { createHistogram } from "node:perf_hooks";
import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursosPointer: number;
  readonly unsaveChanges: boolean;

  constructor(content: string, cursorPointer: number, unsaveChange: boolean) {
    this.content = content;
    this.cursosPointer = cursorPointer;
    this.unsaveChanges = unsaveChange;
  }
  copyWith({
    content,
    cursosPointer,
    unsaveChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursosPointer ?? this.cursosPointer,
      unsaveChanges ?? this.unsaveChanges,
    );
  }

  displayStaste() {
    console.log("%cEstados del editor", COLORS.pink);
    console.log(`
            content:${this.content}
            cursorPointer ${this.cursosPointer}
            unsaveChange ${this.unsaveChanges}
            `);
  }
}

class codeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save(state: CodeEditorState): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(state);
    this.currentIndex++;
  }

  undo():CodeEditorState | null{

    if(this.currentIndex >0 ){
        this.currentIndex --;
        return this.history[this.currentIndex]

    }
    return null

  }

  reado(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }
}

function main() {
  const history = new codeEditorHistory();
  let editorState = new CodeEditorState(
    "console.log('123tAMARINDO')",
    2,
    false,
  );
  history.save(editorState);
  console.log("%cEstado inicial", COLORS.blue);
  editorState.displayStaste();

  editorState = editorState.copyWith({
    content: "<Text> Que onda <Text/>",
    cursosPointer: 34,
    unsaveChanges: true,
  });

  history.save(editorState);
  console.log("%cHay cambios", COLORS.red);
  editorState.displayStaste();

  editorState = editorState.copyWith({
    cursosPointer: 3,
  });
  history.save(editorState);
  console.log("%cHay cambios", COLORS.red);
  editorState.displayStaste();

  
  console.log("%cDespues del undo", COLORS.yellow);
  editorState = history.undo()!;
  editorState.displayStaste();

   console.log("%cDespues del Readu", COLORS.violet);
  editorState = history.reado()!;
  editorState.displayStaste();
}

main();
