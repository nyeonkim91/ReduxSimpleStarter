import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// 2 Step: wire into the application
const rootReducer = combineReducers({
  // state --> books(key of state) + BooksReducer(value of state)
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
