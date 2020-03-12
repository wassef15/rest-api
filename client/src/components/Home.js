import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Home extends Component {


    render() {
        return (
            <div >
                <h1>
                    Contact App
                </h1>

                <Link to="/listContacts"> <button type="button">ListContact!</button></Link>
                <Link to="/addContact"><button type="button">Add Contact!</button></Link>
                

            </div>
        );
    }
}



export default Home;