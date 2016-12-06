import authentication from './authentication';
import memo from './memo';
import projectCard from './projectCard';
import search from './search';


import { combineReducers } from 'redux';

export default combineReducers({
    authentication, memo, search, projectCard
});
