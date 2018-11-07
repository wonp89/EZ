import axios, { AxiosResponse } from 'axios';
import { take, fork, put, call } from 'redux-saga/effects';
import {
  APP_STORAGE_KEY,
  // FETCH_TRANSACTIONS,
  CREATE_TRANSACTIONS_REQUEST,
  // UPDATE_TRANSACTIONS,
  // DELETE_TRANSACTIONS,
} from '../constants';
import { TransactionApp } from '../types/transactions';
import { createTransactionsSuccess } from '../actions/transactions';
import { loadLocalStorageItem } from '../helpers/localStorage';
// import { push } from 'connected-react-router';

export const createTransactions = function*() {
  while (true) {
    const { payload } = yield take(CREATE_TRANSACTIONS_REQUEST);
    console.log(payload);
    const transactions: TransactionApp = {};
    const localStorageItem: any = yield loadLocalStorageItem(APP_STORAGE_KEY);
    try {
      const responses: AxiosResponse = yield call(
        axios.post,
        `/api/users/${localStorageItem.userId}/transactions`,
        // this is dummy transaction request. It will be replaced with "payload"
        [
          {
            categoryId: 3,
            description: 'hello',
            deposit: 20,
            transactionDatetime: '2018-11-07T05:40:59',
          },
        ],
        { headers: { Authorization: 'Bearer ' + localStorageItem.accessToken } }
      );
      responses.data.forEach((transaction: any) => {
        const { id } = transaction;
        transactions[id] = transaction;
      });
      console.log(transactions);
    } catch (error) {
      console.log(error);
    }

    yield put(createTransactionsSuccess(transactions));
  }
};

export default function*() {
  yield fork(createTransactions);
}
