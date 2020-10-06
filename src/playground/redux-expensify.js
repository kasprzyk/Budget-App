import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((id) => {
        id !== action.id;
      });
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

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Rent2', amount: 1002 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
