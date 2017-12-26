export function cargarDatos (data){
	return{
		type:'CARGAR_DATOS',
		data: data,
	}
}

export function cogerRow (row){
	return{
		type : 'COGER_ROW',
		row: row,
	}
}