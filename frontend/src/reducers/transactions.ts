import {
  TransactionApp,
  TransactionAction,
  // TransactionActionPayload,
} from '../types/transactions';
import {
  // FETCH_TRANSACTIONS,
  CREATE_TRANSACTIONS,
  // DELETE_TRANSACTIONS,
  // UPDATE_TRANSACTIONS,
} from '../constants';
// import * as R from 'ramda';

const initialFormState: TransactionApp = [];

export default (
  state = [],
  formState = initialFormState,
  action: TransactionAction
): object[] => {
  switch (action.type) {
    case CREATE_TRANSACTIONS: {
      // return action.payload;
    }
  }
  return state;
};


// immutable reference
// const payload = [{id: 1, des: 'dish'}, {id: 2, des: 'laundary'}, {id: 3, des: 'coding'}]

// function create(obj) {
//   return [...payload, ...obj]
// }
// create([{id: 4, des: 'shopping'}, {id: 5, des: 'dance'}])

// function remove(uids) {
//   return payload.filter(item => !uids.includes(item.id));
// }
// remove([1, 3])

// function update(uid) {
//   return payload.map(item => item.id === uid ? {...item, des: 'shopping'} : item)
// }
// pr(1)

