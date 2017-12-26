import React from 'react'

class TargetElement extends React.Component {

  render() {

  	return (
  		<div>
    <h3>{this.props.target}</h3>
    <h4>{this.props.targetType}</h4>
    </div>
    )
  }
}

export default TargetElement