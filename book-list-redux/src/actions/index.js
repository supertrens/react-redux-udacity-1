

export function selectBook(book){
//selectBook is an actionCreator , it need to return ana ction,
//an object with a type and property

return{
  type: ' BOOK_SELECTED',
  payload: book
}
}
