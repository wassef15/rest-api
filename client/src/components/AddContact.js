import React, { Component } from "react";
import { addContactActions } from '../actions/contactActions';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'



class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            telephone : "",
            email : ""
        };
    };

    add = () => {
        this.props.addContactActions(this.state);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div >
                <h1>
                    Contact App
                </h1>


                <input onChange={this.handleChange} name="name" value={this.state.name} placeholder="name"/>
                <input onChange={this.handleChange} name="telephone" value={this.state.telephone} placeholder="telephone"/>
                <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="email"/>

               

                    <Link to="/listContacts"><button onClick={this.add}>Add Contact!</button></Link>

            </div>
        );
    }
}




export default connect(null, { addContactActions })(AddContact);