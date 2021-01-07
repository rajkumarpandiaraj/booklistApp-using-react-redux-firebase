import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/taskAction';

function BookForm(props) {
    const { addBook } = props;
    const [ details, setDetails ] = useState({title : "", author : '', isbn : ''})
    const handleChange = e =>{
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(details);
        addBook(details)
    }
    return (
        <>
        <form action="" id="form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" id="title"/>
                <label htmlFor="author">Author</label>
                <input onChange={handleChange} type="text" name="author" id="author"/>
                <label htmlFor="isbn">ISBN</label>
                <input onChange={handleChange} type="text" name="isbn" id="isbn"/>
                <input type="submit" value="Add Book" id="submit"/>
            </form>
            </>
    )
}
// const mapStateToProps = state => {
//     return {
//         test : state.taskReducer.test
//     }
// }
const mapDispatchToProps = dispatch => {
    return{
        addBook: (details) => dispatch(addBook(details))
    }
}

export default connect(null,mapDispatchToProps)(BookForm)
