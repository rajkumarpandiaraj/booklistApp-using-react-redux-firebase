import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { signUp } from '../../redux/actions/authActions';

export class SignUpForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault(); 
        console.log(this.state);
        this.props.signUp(this.state)
    }
    
    render() {

        if(this.props.auth.uid){
            return <Redirect to='/' exact/>
        }
        return (
            <div className='container w-50'>
                <h1 className='text-center mt-2'>SignUp</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange} name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={this.state.password} onChange={this.handleChange} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <input type="submit" value="SignUp"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth : state.firebase.auth
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        signUp : (cred) => dispatch(signUp(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
// export default SignUpForm