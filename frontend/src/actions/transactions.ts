import * as constants from '../constants';
import {
  Transaction,
  FetchTransactions,
  CreateTransactions,
  UpdateTransactions,
  DeleteTransactions,
  AddTransactionForm,
  RemoveTransactionForm,
} from '../types/transactions';

// id will increase for every addTransactionForm
export const addTransactionForm = (id: number): AddTransactionForm => ({
  type: constants.ADD_TRANSACTION_FORM,
  payload: {
    id,
    date: new Date(),
    type: '',
    category: '',
    description: '',
    amount: 0,
  },
});

//TODO::
// let obj = {
//   1: {transactions: {id: 1, type: 'aaa'}},
//   2: {transactions: {id: 2, type: 'bbb'}}
// }
// delete obj[1] -> result: obj = { 2: {transactions: {id: 2, type: 'bbb'}}}
export const removeTransactionForm = (id: number): RemoveTransactionForm => ({
  type: constants.REMOVE_TRANSACTION_FORM,
  payload: id,
});

export const fetchTransactions = (
  transactionsData: Transaction[]
): FetchTransactions => ({
  type: constants.FETCH_TRANSACTIONS,
  payload: transactionsData,
});

export const createTransactions = (
  id: number,
  date: Date,
  type: string,
  category: string,
  description: string,
  amount: number
): CreateTransactions => ({
  type: constants.CREATE_TRANSACTIONS,
  payload: { id, date, type, category, description, amount },
});

export const updationTransactions = (
  id: number,
  date: Date,
  type: string,
  category: string,
  description: string,
  amount: number
): UpdateTransactions => ({
  type: constants.UPDATE_TRANSACTIONS,
  payload: { id, date, type, category, description, amount },
});

export const deleteTransactions = (ids: number[]): DeleteTransactions => ({
  type: constants.DELETE_TRANSACTIONS,
  payload: ids,
});
