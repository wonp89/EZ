import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createTransactions } from '../../actions/transactions';
import { AppState } from '../../types';
import { Transaction, TransactionFormItem } from '../../types/transactions';

interface Props {
  createTransactions: (transactionValue: Transaction[]) => void;
}

interface State {
  transactions: TransactionFormItem[];
}

class TransactionForm extends React.Component<Props, State> {
  state: State = {
    transactions: [
      {
        date: { value: new Date(), touched: false, required: true },
        type: { value: 'deposit', touched: false, required: true },
        category: { value: 'food', touched: false, required: true },
        description: { value: '', touched: false, required: true },
        amount: { value: 0, touched: false, required: true },
      },
    ],
  };

  addTransactionFormItem = () => {
    const transactionsClone = ({
      date: { value: '', touched: false, required: true },
      type: { value: 'deposit', touched: false, required: true },
      category: { value: 'food', touched: false, required: true },
      description: { value: '', touched: false, required: true },
      amount: { value: 0, touched: false, required: true },
    });
    this.setState({
      transactions: [...this.state.transactions, transactionsClone],
    })
  };

  deleteTransactionFormItem(event: any, selectedItem: number) {
    event.preventDefault();
    const transactionsClone: TransactionFormItem[] = [...this.state.transactions].filter(
      (_, i: number) => i !== selectedItem
    );
    this.setState({
      transactions: transactionsClone,
    });
  }

  handleChange(event: any, index: number) {
    this.checkTransactionFormValues();
    const transactionsClone = [...this.state.transactions];
    transactionsClone[index][event.target.name].touched = true;
    transactionsClone[index][event.target.name].value = event.target.value;
    this.setState({ transactions: transactionsClone });
  }

  checkTransactionFormValues() {
    let isValue: boolean = false;
    for (const item of this.state.transactions) {
      Object.keys(item).forEach(name => {
        if (item[name].value === '' || item[name].value === 0 || typeof item[name].value === 'object') {
          isValue = true;
        }
      });
    }
    return isValue;
  }

  handleSubmit(values: TransactionFormItem[]) {
    const transactionFormItem: Transaction[] = [];
    for (const item of values) {
      const refactoredValues: any = {} // { [name: string]: any }
      Object.keys(item).forEach(name => {
        refactoredValues[name] = item[name].value;
      });
      transactionFormItem.push(refactoredValues);
    }
    this.props.createTransactions(transactionFormItem)
  }

  render() {
    console.log(this.state.transactions);
    return (
      <div>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.addTransactionFormItem}
        >
          Add more
        </button>
        <hr />
        <form>
          {this.state.transactions.map((_, i) => (
            <div key={i}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="transactionDate">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="transactionDate"
                      name="date"
                      value={this.state.transactions[i].date.value}
                      onChange={event => this.handleChange(event, i)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="transactionType">Type</label>
                    <select
                      className="form-control"
                      id="transactionType"
                      name="type"
                      value={this.state.transactions[i].type.value}
                      onChange={event => this.handleChange(event, i)}
                    >
                      <option>Deposit</option>
                      <option>Withdrawal</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="category">Category</label>
                    <select
                      className="form-control"
                      id="category"
                      name="category"
                      value={this.state.transactions[i].category.value}
                      onChange={event => this.handleChange(event, i)}
                    >
                      <option>Food</option>
                      <option>Transportation</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id="description"
                      value={this.state.transactions[i].description.value}
                      onChange={event => this.handleChange(event, i)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      className="form-control"
                      id="amount"
                      value={this.state.transactions[i].amount.value}
                      onChange={event => this.handleChange(event, i)}
                    />
                  </div>
                </div>
              </div>
              {this.state.transactions.length === 1 ? undefined : (
                <button
                  onClick={event => this.deleteTransactionFormItem(event, i)}
                  className="btn btn-danger btn-lg btn-block"
                >
                  Remove
                </button>
              )}
              <hr />
            </div>
          ))}
        </form>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={() => this.handleSubmit(this.state.transactions)}
          disabled={this.checkTransactionFormValues()}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  transactions: state.transactions,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ createTransactions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionForm);
