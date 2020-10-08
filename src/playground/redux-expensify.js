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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

const expensesReducerDefaultState = [];
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((id) => {
        id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

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
// ACTION GENERRATORS
const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Rent2', amount: 1002 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate());

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

const user = {
  name: 'Jen',
  age: 101,
};
