import {
  TransactionAction
} from '../types/transactions';
import {
  FETCH_TRANSACTIONS,
  CREATE_TRANSACTIONS,
  UPDATE_TRANSACTIONS,
  DELETE_TRANSACTIONS
} from '../constants';
// import * as R from 'ramda';

export default (
  state = [],
  action: TransactionAction
): any => {
  switch (action.type) {
    case FETCH_TRANSACTIONS: {
      console.log('FETCH_TRANSACTIONS: ', action.payload)
      return [...state, ...action.payload]
    }
    case CREATE_TRANSACTIONS: {
      return [...state, ...action.payload]
      console.log('CREATE_TRANSACTIONS: ', action.payload)
    }
    case UPDATE_TRANSACTIONS: {
      console.log('UPDATE_TRANSACTIONS: ', action.payload)
    }
    case DELETE_TRANSACTIONS: {
      console.log('DELETE_TRANSACTIONS: ', action.payload)
    }
  }
  return state;
};


