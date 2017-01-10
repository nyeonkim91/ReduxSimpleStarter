import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// 2 Step: wire into the application
const rootReducer = combineReducers({
  // state --> books(key of state) + BooksReducer(value of state)
  books: BooksReducer
});

export default rootReducer;
