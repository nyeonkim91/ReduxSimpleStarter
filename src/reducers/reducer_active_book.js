// state argument is not application state, only the state this reducer is responsible for
// redux doesn't allow to return undefined from reducer
// 'state = null' is es6 syntax
export default function(state = null, action) {
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
    // always return a fresh object... don't do it like below
    // state.title = book.title
    // return state;
  }
  // if there is no related action
  return state;
}
