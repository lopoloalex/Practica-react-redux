import { rowid } from '../constants/constants.jsx';


function rowidReduce(state = rowid, action) {
    switch (action.type) {
    case 'COGER_ROW':
       
       let newState = action.row;
       return newState;		
    default:
        return state;
    }
}

export default rowidReduce;