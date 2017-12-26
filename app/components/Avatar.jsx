import React from 'react'

class Avatar extends React.Component {
  render() {
  	return (
      <figure className="media-left">
        <img className="media-object"   height= "100px" width = "100px" src={this.props.picture} />
      </figure>
    )
  }
}

export default Avatar