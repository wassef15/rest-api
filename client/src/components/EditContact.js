import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {addContactActions, updateContactActions} from "../actions/contactActions";



class EditContact extends Component {
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

    componentDidMount(){
        this.setState(
            this.props.data.contacts.filter(el=>el._id == this.props.match.params.id)[0]
        )
    }

    edit =() =>{
        this.props.updateContactActions(this.state._id, {name: this.state.name, telephone: this.state.telephone, email: this.state.email})
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

               

                    <Link to="/listContacts"><button onClick={this.edit}>Update!</button></Link>

            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        data: state.Reducer
    };
}


export default connect(mapStateToProps, { updateContactActions })(EditContact);