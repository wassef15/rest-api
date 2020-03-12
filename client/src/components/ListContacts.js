import React, { Component } from "react";
import { connect } from "react-redux";
import { contactActions, deleteContactActions } from "../actions/contactActions";
import {Link} from 'react-router-dom'



class ListContacts extends Component {
    state = {};
    componentDidMount() {
        this.props.contactActions();
    }

    render() {


        return (
            <div >
                {this.props.data.contacts.map(el => (
                    <div><ul className="listContacts">
                        <li >name :</li>{el.name}
                        <li>telephone :</li>{el.telephone}
                        <li>email :</li>{el.email}
                        <li>
                            <button onClick={() => this.props.deleteContactActions(el._id)}>delete</button>

                            <Link to={`/editContact/${el._id}`}><button>edit</button></Link>
                        </li>

                    </ul> </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.Reducer
    };
};


export default connect(mapStateToProps, { contactActions, deleteContactActions })(ListContacts);