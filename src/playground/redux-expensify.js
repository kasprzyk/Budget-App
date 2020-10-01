import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'asdasdasd',
      description: 'test',
      note: 'Test2',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};
