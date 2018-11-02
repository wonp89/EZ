import * as constants from '../constants';

export interface Transaction {
  id: number;
  date: Date;
  type: string;
  category: string;
  description: string;
  amount: number;
}
export interface TransactionActionPayload {
  id: number;
  date?: Date;
  type?: string;
  category?: string;
  description?: string;
  amount?: number;
}

export interface CreateTransactionPayload {
  date: Date;
  type: string;
  category: string;
  description: string;
  amount: number;
}

export interface TransactionApp {
  [id: number]: Transaction;
}

export interface FetchTransactions {
  type: constants.FETCH_TRANSACTIONS;
  payload: Transaction[];
}

export interface CreateTransactions {
  type: constants.CREATE_TRANSACTIONS;
  payload: CreateTransactionPayload;
}

export interface DeleteTransactions {
  type: constants.DELETE_TRANSACTIONS;
  payload: TransactionActionPayload;
}

export interface UpdateTransactions {
  type: constants.UPDATE_TRANSACTIONS;
  payload: TransactionActionPayload;
}

export type TransactionAction =
  | FetchTransactions
  | CreateTransactions
  | DeleteTransactions
  | UpdateTransactions