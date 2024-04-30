import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_EDIT = "PUT_USERS_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/RandaAlfizah/react-individual-assignment/users/"
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/RandaAlfizah/react-individual-assignment/users/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/RandaAlfizah/react-individual-assignment/users/",
        data
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://my-json-server.typicode.com/RandaAlfizah/react-individual-assignment/users/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "http://my-json-server.typicode.com/afifbasya/reactjs-redux/users/"+id
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });


    dispatch({
      type:POST_USERS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

  };
};

