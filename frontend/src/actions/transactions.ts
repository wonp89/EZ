import * as constants from '../constants';
import {
  Transaction,
  FetchTransactions,
  CreateTransactions,
  UpdateTransactions,
  DeleteTransactions
  TransactionActionPayload,
} from '../types/transactions';

export const fetchTransactions = (
  transactionsData: Transaction[]
): FetchTransactions => {
  return {
    type: constants.FETCH_TRANSACTIONS,
    payload: transactionsData,
  };
};

export const createTransactions = (
  date: Date,
  type: string,
  category: string,
  description: string,
  amount: number
): CreateTransactions => ({
  type: constants.CREATE_TRANSACTIONS,
  payload: { date, type, category, description, amount },
});

export const updateTransactions = (
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

export const deleteTransactions = (
  id: number
): DeleteTransactions => ({
  type: constants.DELETE_TRANSACTIONS,
  payload: { id },
});
