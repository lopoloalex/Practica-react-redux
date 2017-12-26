import React from 'react'

class CustomerDetail extends React.Component {
  render() {
  	    if ( typeof this.props.cliente == "undefined" || this.props.cliente === null ) {
      return <div></div>;
    }
  	return (
     <div>
     	<h2>Customer detail</h2>
     		<h3>Name: {tieneValor(this.props.cliente.name)}</h3>
     		<h3>Code: {tieneValor(this.props.cliente.code)}</h3>
     		<h3>Phone: {tieneValor(this.props.cliente.phone1)}</h3>
     		<h3>Address: {tieneValor(this.props.cliente.address1)}</h3>
     		<h3>Web: {tieneValor(this.props.cliente.web)}</h3>
     </div>
    )
  }
}
function tieneValor(valor){
		if (valor.length == 0 || valor == null ){
			return "Empty";
		}
		else {
			return valor;
		}
}



export default CustomerDetail