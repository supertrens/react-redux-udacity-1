import React , {Component} from 'react';
import {connect} from 'react-redux' ;
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li
          key={book.title}
          onClick ={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }


  render(){
    return(
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//QAnything returned from this function will end up as mapStateToProp
//on the BookList container
function mapStateToProps(state){
  //whatever is returned is returned will show up as mapStateToProps
  //inside of BookList
  return{
    books : state.books
  };
}

function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators ({selectBook}, dispatch)
}

//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available
export default connect(mapStateToProps , mapDispatchToProps)(BookList)
