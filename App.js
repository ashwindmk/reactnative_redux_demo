import React, { Component } from 'react';
import Counter from './src/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {count: state.count + 1};

    case 'DECREMENT_COUNT':
      return {count: state.count - 1};
  }
  
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
};

export default App;
