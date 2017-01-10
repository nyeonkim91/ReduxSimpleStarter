import React, { Component } from 'react';
// coonect is a function that makes connection(glue) btw React libarary and Redux libarary, and that connection makes usable state
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render() {
    return (
      <ul classNmae="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// the glue btw react and redux
// if state ever changes, this container will instantly rerender with the new list of books
// whenever the application state changes the object in the state fucntion will be assgined as props to the component
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// export container, not component
// connect takes a function and a component, and produces container
// container is a component that is aware of the state that's contained by redux
export default connect(mapStateToProps)(BookList);
