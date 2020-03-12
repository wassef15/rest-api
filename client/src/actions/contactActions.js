  
import {GET_CONTACT,ADD_CONTACT,DELTE_CONTACT} from "./types";
import axios from "axios";

export const contactActions = () => dispatch => {
    axios
      .get("/get_contact")
      .then(res => 
        dispatch({
          type: GET_CONTACT,
          payload: res.data
        })
      );
  };

  
export const addContactActions = (newContact) => dispatch => {
  axios
    .post("/new_contact" , newContact)
    .then(
      dispatch(contactActions())
    );
};


  
export const deleteContactActions = (id) => dispatch => {
  axios
    .delete(`/delete_contact/${id}`)
    .then(
      dispatch(contactActions())
    );
};

export const updateContactActions = (id, newContact) => dispatch => {
  axios
  .put(`/modify_contact/${id}`, newContact)
  .then(dispatch(contactActions()));
};