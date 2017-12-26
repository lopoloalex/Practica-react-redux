import React from 'react'
import TargetElement from './TargetElement'

class TargetDetail extends React.Component {

  render() {
    if (typeof this.props.listado == "undefined" ){
      return <div></div>
    }
  	if (this.props.listado.length == 0 ){
  		return <div>
            <h2>Targets</h2>
               <h4>Empty</h4>

      </div>;
  	}
  
  	return (
  		<div>
  		<h2>Targets</h2>
  		<ul className="targets">
				{
					this.props.listado.map((target) => {
						return <TargetElement key={ target.id }
																target={target.Company.name}
																targetType={target.TargetType.name}
																/>
					})
				}
			</ul>

  		</div>
    )
  }
}

export default TargetDetail