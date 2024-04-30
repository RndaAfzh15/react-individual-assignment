import { GET_USERS_DETAIL, GET_USERS_LIST, POST_USERS_CREATE, PUT_USERS_EDIT } from "../actions/userAction";

let initialState ={
    getUsersList: false,
 errorUsersList:false,
 getUsersDetail:false,
 errorUsersDetai:false,
 getRespondDataUser: false,
 errorRespondDataUser: false,
 title: "Hariselasa Academy"
};

const users = (state = initialState, action) => {
        switch (action.type) {
                case GET_USERS_LIST:
                return {
                        ...state,
                        getUsersList:action.payload.data,
                        errorUsersList:action.payload.errorMessage,

                };

                case GET_USERS_DETAIL:
                return {
                        ...state,
                        getUsersDetail:action.payload.data,
                        errorUsersDetail:action.payload.errorMessage,

                };

                case POST_USERS_CREATE:
                return {
                        ...state,
                        getRespondDataUser:action.payload.data,
                        errorRespondDataUser:action.payload.errorMessage,

                };

                case PUT_USERS_EDIT:
                return {
                        ...state,
                        getRespondDataUser:action.payload.data,
                        errorRespondDataUser:action.payload.errorMessage,

                };
                        
                default:
                return state;
        }
};

export default users;
