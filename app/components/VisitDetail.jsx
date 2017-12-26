import React from 'react'

class VisitDetail extends React.Component {


  render() {
    if ( typeof this.props.plannedFor == "undefined" || this.props.plannedFor === null ) {
      return <div className="default"><h1>Por favor seleccione una visita</h1></div>;
    }
  	return (

  		<div>
  			<h2>Info.</h2>
  			<div className="plannedFor">
  				<h3>Planned for: {esFecha(this.props.plannedFor)} </h3>
  			</div>
  			<div>
  				<h3>Fulfilled at: {esFecha(this.props.fulfilled)}</h3>
  			</div>
  		</div>
      
    )
  }
}
function esFecha(fecha){
		if (fecha === undefined || fecha == null ){
			return "Pendiente";
		}
		else {
			return fecha.substr(0,10);
		}

	}
export default VisitDetail