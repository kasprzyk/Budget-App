import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
      }));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    //e.persist();
    this.setState(() => ({
      note,
    }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></input>
          <input
            type='number'
            placeholder='Amount'
            value={this.state.amount}
          ></input>
          <textarea
            placeholder='Add a note to your description (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
