import {datos} from '../constants/constants.jsx';



function dataReducer (state = datos, action){
	switch (action.type){
		case 'CARGAR_DATOS' :
	   let newState = action.data;
       return newState;	

		default:
			return state;

	}
}

export default dataReducer;