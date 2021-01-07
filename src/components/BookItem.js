import React from 'react'
import { deleteBook } from '../redux/actions/taskAction';
import { connect } from 'react-redux';

function BookItem(props) {
    const { item, deleteBook } = props;
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.isbn}</td>
            <td className='delete' onClick={() => deleteBook(item.id)}>X</td>
        </tr>
    )
}
const mapDispatchToProps = dispatch =>{
    return {
        deleteBook :  id => dispatch(deleteBook(id))
    }
}

export default connect(null, mapDispatchToProps)(BookItem)
