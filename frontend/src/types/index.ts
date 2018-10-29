import { TodoApp } from './todos';
import { TransactionApp } from './transactions';

export interface Enthusiasm {
  languageName: string;
  enthusiasmLevel: number;
}

// This is the type of our redux store
export interface AppState {
  enthusiasm: Enthusiasm;
  planner: {};
  todos: TodoApp;
  transactions: TransactionApp;
  auth: any;
}
