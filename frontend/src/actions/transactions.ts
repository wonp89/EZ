import * as constants from '../constants';
import {
  Transaction,
  TransactionApp,
  FetchTransactions,
  CreateTransactions,
  CreateTransactionsSuccess,
  UpdateTransactions,
  DeleteTransactions,
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
  transactionsCreatedArray: Transaction[]
): CreateTransactions => ({
  type: constants.CREATE_TRANSACTIONS_REQUEST,
  payload: transactionsCreatedArray,
});

export const createTransactionsSuccess = (
  transactionResponse: TransactionApp
): CreateTransactionsSuccess => ({
  type: constants.CREATE_TRANSACTIONS_SUCCESS,
  payload: transactionResponse,
});

export const updateTransactions = ({
  id,
  date,
  type,
  category,
  description,
  amount,
}: TransactionActionPayload): UpdateTransactions => ({
  type: constants.UPDATE_TRANSACTIONS,
  payload: { id, date, type, category, description, amount },
});

export const deleteTransactions = (
  transactioinsDeletedArray: TransactionActionPayload[]
): DeleteTransactions => ({
  type: constants.DELETE_TRANSACTIONS,
  payload: transactioinsDeletedArray,
});
