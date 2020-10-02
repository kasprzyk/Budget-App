import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducer,
  })
);

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
