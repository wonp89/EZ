import * as React from 'react';
// import * as R from 'ramda';

interface Props {
  transactions: any;
}

interface State {
  count: number;
  formItemCount: number[];
  formValues: object[];
  // | [
  //     {
  //       date: {value: Date, touched: boolean, required: boolean};
  //       type: {value: string, touched: boolean, required: boolean};
  //       category: {value: string, touched: boolean, required: boolean};
  //       description: {value: string, touched: boolean, required: boolean};
  //       amount: {value: number, touched: boolean, required: boolean};
  //     }
  //   ];
}

export default class TransactionForm extends React.Component<Props, State> {
  state: State = {
    count: 1,
    formItemCount: [0],
    formValues: [
      {
        date: { value: new Date(), touched: false, required: true },
        type: { value: 'deposit', touched: false, required: true },
        category: { value: 'food', touched: false, required: true },
        description: { value: '', touched: false, required: true },
        amount: { value: 0, touched: false, required: true },
      },
    ],
  };

  addTransactionFormItem = async () => {
    let formValuesClone: object[] = [...this.state.formValues];
    formValuesClone.push({
      date: { value: new Date(), touched: false, required: true },
      type: { value: 'deposit', touched: false, required: true },
      category: { value: 'food', touched: false, required: true },
      description: { value: '', touched: false, required: true },
      amount: { value: 0, touched: false, required: true },
    });
    formValuesClone = formValuesClone;
    await this.setState({ formValues: formValuesClone });
    await this.setState({ count: ++this.state.count });
    await this.setState({
      formItemCount: [...Array(this.state.count)].fill(0),
    });
  };

  deleteTransactionForm(event: any, selectedItem: number) {
    event.preventDefault();
    const formItemCountClone: number[] = this.state.formItemCount.filter(
      (_, i: number) => i !== selectedItem
    );
    const formValuesClone: object[] = this.state.formValues.filter(
      (_, i: number) => i !== selectedItem
    );
    this.setState({
      formItemCount: formItemCountClone,
      count: --this.state.count,
      formValues: formValuesClone,
    });
  }

  handleChange(event: any, index: number) {
    const formValuesClone = [...this.state.formValues];
    formValuesClone[index][event.target.name].touched = true;
    formValuesClone[index][event.target.name].value = event.target.value;
    this.setState({ formValues: formValuesClone });
  }

  handleSubmit(values: object[]) {
    const formValues: object[] = [];
    const refactoredValues: { [name: string]: string | number | Date } = {};
    for (const item of values) {
      Object.keys(item).forEach(name => {
        refactoredValues[name] = item[name].value;
      });
      formValues.push(Object.assign({}, refactoredValues));
    }
    //TODO: execute action method here with formValues
    console.log(formValues);
  }

  render() {
    console.log(this.state.formValues);
    return (
      <div>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.addTransactionFormItem}
        >
          Add more
        </button>
        <hr />
        {this.state.formItemCount.map((_, i) => (
          <form key={i}>
            <div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="transactionDate">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="transactionDate"
                      name="date"
                      value={this.state.formValues[i]['date'].value}
                      onChange={event => this.handleChange(event, i)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="transactionType">Type</label>
                    <select
                      className="form-control"
                      id="transactionType"
                      name="type"
                      value={this.state.formValues[i]['type'].value}
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
                      value={this.state.formValues[i]['category'].value}
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
                      value={this.state.formValues[i]['description'].value}
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
                      value={this.state.formValues[i]['amount'].value}
                      onChange={event => this.handleChange(event, i)}
                    />
                  </div>
                </div>
              </div>
              {this.state.count === 1 ? null : (
                <button
                  onClick={event => this.deleteTransactionForm(event, i)}
                  className="btn btn-danger btn-lg btn-block"
                >
                  Remove
                </button>
              )}
              <hr />
            </div>
          </form>
        ))}
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={() => this.handleSubmit(this.state.formValues)}
        >
          Submit
        </button>
      </div>
    );
  }
}
