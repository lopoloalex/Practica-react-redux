import React from 'react';
import Avatar from './Avatar.jsx';

class SalesmanDetail extends React.Component {
  render() {
  	 if ( typeof this.props.salesman == "undefined" || this.props.salesman === null ) {
      return <div></div>;
    }
  	return (
     <div>
     	<h2>Salesman detail</h2>
     	<Avatar picture={tieneValor(this.props.salesman.Photo).url} />

     		<h3>Name: {decode_utf8(tieneValor(this.props.salesman.fullname))}</h3>
     		<h3>Phone: {tieneValor(this.props.salesman.phone1)}</h3>
     		<h3>Email: {tieneValor(this.props.salesman.email1)}</h3>
     </div>
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
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

export default SalesmanDetail

