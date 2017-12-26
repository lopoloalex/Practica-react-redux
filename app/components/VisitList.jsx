import React from 'react';


import Row from './Row';


class VisitList extends React.Component {

	constructor(props) {
		super(props);
		this.visitListClick = this.visitListClick.bind(this);
	}

	visitListClick (numRowID) {
		this.props.appClick(numRowID);
	}

	render() {
		return (
			<ul className="media-list">
				{
					this.props.listado.map((visits) => {
						return <Row key={ visits.id }
																customer={ visits.Customer.name}
																picture={tieneValor(visits.Salesman.Photo).url}  
																salesman={ visits.Salesman.fullname }
																date={ visits.plannedFor }
																indice = {visits}
																visitListClick={this.visitListClick}

																/>
					})
				}
			</ul>

		)
	}
}
function tieneValor(valor){
		if (valor == null || valor.length == 0 ||  valor == undefined ){
			return "Empty";
		}
		else {
			return valor;
		}
}
export default VisitList
