import {combineReducers} from 'redux';
import dataReduce from './dataReduce.jsx';
import rowidReduce from './rowidReduce.jsx';

const GlobalState = combineReducers({
	rowID : rowidReduce,
	data : dataReduce,
});

export default GlobalState;