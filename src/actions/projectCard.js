import {
    PROJECT_CARD_POST,
    PROJECT_CARD_POST_SUCCESS,
    PROJECT_CARD_POST_FAILURE,
    PROJECT_CARD_LIST,
    PROJECT_CARD_LIST_SUCCESS,
    PROJECT_CARD_LIST_FAILURE,
    PROJECT_CARD_EDIT,
    PROJECT_CARD_EDIT_SUCCESS,
    PROJECT_CARD_EDIT_FAILURE,
    PROJECT_CARD_REMOVE,
    PROJECT_CARD_REMOVE_SUCCESS,
    PROJECT_CARD_REMOVE_FAILURE,
    PROJECT_CARD_STAR,
    PROJECT_CARD_STAR_SUCCESS,
    PROJECT_CARD_STAR_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* MEMO POST */
export function projectCardPostRequest(contents) {
    return (dispatch) => {
        dispatch(projectCardPost());

        return axios.post('/api/projectCard/', { contents })
        .then((response) => {
            dispatch(projectCardPostSuccess());
        }).catch((error) => {
            dispatch(projectCardPostError(error.response.data.code));
        });
    };
}

export function projectCardPost() {
    return {
        type: PROJECT_CARD_POST
    };
}

export function projectCardPostSuccess() {
    return {
        type: PROJECT_CARD_POST_SUCCESS
    };
}

export function projectCardPostFailure(error) {
    return {
        type: PROJECT_CARD_POST_FAILURE,
        error
    };
}

/* MEMO LIST */

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function projectCardListRequest(isInitial, listType, id, username) {
    return (dispatch) => {
        // to be implemented
        dispatch(projectCardList());

        let url = '/api/projectCard';

        if(typeof username === "undefined") {
            // username not given, load public memo
            url = isInitial ? url : `${url}/${listType}/${id}`;
            // or url + '/' + listType + Z'/' +  id
        } else {
            // load memos of a user
            url = isInitial ? `${url}/${username}` : `${url}/${username}/${listType}/${id}`;
        }

        return axios.get(url)
        .then((response) => {
            dispatch(projectCardListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(projectCardListFailure());
        });

    };
}
export function projectCardList() {
    return {
        type: PROJECT_CARD_LIST
    };
}

export function projectCardListSuccess(data, isInitial, listType) {
    return {
        type: PROJECT_CARD_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function projectCardListFailure() {
    return {
        type: PROJECT_CARD_LIST_FAILURE
    };
}

/* MEMO EDIT */
export function projectCardEditRequest(id, index, contents) {
    return (dispatch) => {
        dispatch(projectCardEdit());

        return axios.put('/api/projectCard/' + id, { contents })
        .then((response) => {
            dispatch(projectCardEditSuccess(index, response.data.projectCard));
        }).catch((error) => {
            dispatch(projectCardEditFailure(error.response.data.code));
        });
    };
}

export function projectCardEdit() {
    return {
        type: PROJECT_CARD_EDIT
    };
}

export function projectCardEditSuccess(index, projectCard) {
    return {
        type: PROJECT_CARD_EDIT_SUCCESS,
        index,
        projectCard
    };
}

export function projectCardEditFailure(error) {
    return {
        type: PROJECT_CARD_EDIT_FAILIURE,
        error
    };
}

/* MEMO REMOVE */
export function projectCardRemoveRequest(id, index) {
    return (dispatch) => {
        // TO BE IMPLEMENTED
        dispatch(projectCardRemove());

        return axios.delete('/api/projectCard/' + id)
        .then((response)=> {
            dispatch(projectCardRemoveSuccess(index));
        }).catch((error) => {
            console.log(error);
            dispatch(projectCardRemoveFailure(error.response.data.code));
        });
    };
}

export function projectCardRemove() {
    return {
        type: PROJECT_CARD_REMOVE
    };
}

export function projectCardRemoveSuccess(index) {
    return {
        type: PROJECT_CARD_REMOVE_SUCCESS,
        index
    };
}

export function projectCardRemoveFailure(error) {
    return {
        type: PROJECT_CARD_REMOVE_FAILURE,
        error
    };
}

/* MEMO STAR */
export function projectCardStarRequest(id, index) {
    return (dispatch) => {
        dispatch(projectCardStar());

        return axios.post('/api/projectCard/star/' + id)
        .then((response) => {
            dispatch(projectCardStarSuccess(index, response.data.projectCard));
        }).catch((error) => {
            console.log(error);
            dispatch(projectCardStarFailure());
        });
    };
}

export function projectCardStar() {
    return {
        type: PROJECT_CARD_STAR
    };
}

export function projectCardStarSuccess(index, projectCard) {
    return {
        type: PROJECT_CARD_STAR_SUCCESS,
        index,
        projectCard
    };
}

export function projectCardStarFailure(error) {
    return {
        type: PROJECT_CARD_STAR_FAILURE,
        error
    };
}
