
import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList.jsx';
import Detail from './Detail.jsx';
import {visits} from './../assets/mock-data';
import $ from 'jquery';
import { connect } from 'react-redux';
import {datos, rowid} from './constants/constants.jsx'
import {cargarDatos, cogerRow} from './reducers/actions'

class App extends React.Component {

	constructor(props) {
		 super(props);
		 this.appClick = this.appClick.bind(this);
	}


	componentDidMount() {
		
		let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=5afcb055e398da2a50d4&dateafter=2017-12-15";

		$.ajax({
			url: url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.props.dispatch(cargarDatos(data));
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
		});
	}
	/*
	componentDidMount(){
		let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=5afcb055e398da2a50d4";

		$.ajax(url,[default]).done(function(data) {
			console.log(data);
		});
	}
	*/

	appClick(numRowID) {
		this.props.dispatch(cogerRow(numRowID));
	}

	render() { 
		if(this.props.data != ""){
			return (
				<div>
						<div className="ListaVisitas">
								<VisitList listado={ this.props.data } appClick={this.appClick}/>
						</div>
							
						<div className="Detalles">
						<Detail visita={this.props.rowID} />
						</div>
				</div>
			);
		} else {
			return (
				<div></div>
			)
		}
		


		

	}
}
function mapStateToProps(state) {
    return {
        data: state.data,
        rowID: state.rowID,
        
    };
}
export default connect(mapStateToProps)(App);


