import React from 'react';
import VisitDetail from './VisitDetail.jsx';
import TargetDetail from './TargetDetail.jsx';
import CustomerDetail from './CustomerDetail.jsx';
import SalesmanDetail from './SalesmanDetail.jsx';

class Detail extends React.Component {
 




  render() {
  	return (
  		<div>
  		  <div>
  		    <VisitDetail plannedFor= {this.props.visita.plannedFor} fulfilled={this.props.visita.fulfilledAt} />
  		  </div>
  		  <div>
  		    <TargetDetail listado = {this.props.visita.Targets} />
  		  </div>
        <div>
         <CustomerDetail cliente = {this.props.visita.Customer} />
         <div>
           <SalesmanDetail salesman = {this.props.visita.Salesman} />
         </div>
        </div>
  	  </div>

  		

  		);
  }
 
}

export default Detail