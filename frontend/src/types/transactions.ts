import * as constants from '../constants';

export interface Transaction {
  id: number;
  date: Date;
  type: string;
  category: string;
  description: string;
  amount: number;
}

interface TransactionActionPayload {
  id?: number;
  date: Date;
  type: string;
  category: string;
  description?: string;
  amount: number;
}

export interface FetchTransactions {
  type: constants.FETCH_TRANSACTIONS;
  payload: Transaction[];
}

export interface CreateTransactions {
  type: constants.CREATE_TRANSACTIONS;
  payload: Transaction;
}

export interface DeleteTransactions {
  type: constants.DELETE_TRANSACTIONS;
  payload: number[];
}

export interface UpdateTransactions {
  type: constants.UPDATE_TRANSACTIONS;
  payload: TransactionActionPayload;
}

export interface AddTransactionForm {
  type: constants.ADD_TRANSACTION_FORM;
  payload: TransactionActionPayload;
}
export interface RemoveTransactionForm {
  type: constants.REMOVE_TRANSACTION_FORM;
  payload: number;
}

export type TransactionAction =
  | FetchTransactions
  | CreateTransactions
  | DeleteTransactions
  | UpdateTransactions
  | AddTransactionForm
  | RemoveTransactionForm;

export interface TransactionApp {
  [id: number]: Transaction;
}
