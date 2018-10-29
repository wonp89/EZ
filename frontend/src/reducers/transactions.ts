import { TransactionApp, TransactionAction } from 'src/types/transactions';
import { CREATE_TRANSACTIONS } from '../constants';
// import * as R from 'ramda';

const initialState: TransactionApp = {};

export default (
  state = initialState,
  action: TransactionAction
): TransactionApp => {
  switch (action.type) {
    case CREATE_TRANSACTIONS: {
      return { ...state, [action.payload.id]: action.payload };
    }
  }
  return state;
};
