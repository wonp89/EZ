import { TransactionAction } from '../types/transactions';
import {
  FETCH_TRANSACTIONS,
  CREATE_TRANSACTIONS_REQUEST,
  CREATE_TRANSACTIONS_SUCCESS,
  UPDATE_TRANSACTIONS,
  DELETE_TRANSACTIONS,
} from '../constants';
// import * as R from 'ramda';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action: TransactionAction): any => {
  switch (action.type) {
    case FETCH_TRANSACTIONS: {
      //   console.log('FETCH_TRANSACTIONS: ', action.payload);
      //   return [...state, ...action.payload];
    }
    case CREATE_TRANSACTIONS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case CREATE_TRANSACTIONS_SUCCESS: {
      return { ...state, ...action.payload, isLoading: false };
    }
    case UPDATE_TRANSACTIONS: {
      console.log('UPDATE_TRANSACTIONS: ', action.payload);
    }
    case DELETE_TRANSACTIONS: {
      console.log('DELETE_TRANSACTIONS: ', action.payload);
    }
  }
  return state;
};
