import { createStore } from 'redux';

//action generator

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count }) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});

//Reducers
//Reducers are pure functions
// Never change a state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ incrementBy: 5 }));

store.dispatch(setCount({ count: 134 }));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5,
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 5,
});

store.dispatch({
  type: 'RESET',
});

store.dispatch({
  type: 'SET',
  count: 101,
});
