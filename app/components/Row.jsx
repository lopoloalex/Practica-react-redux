import React from 'react';
import Avatar from './Avatar';
import './../assets/scss/main.scss';

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.rowClick = this.rowClick.bind(this);
  }

  rowClick(){
    this.props.visitListClick(this.props.indice);
  }



  render() {
    return(
      <button className="media" onClick={this.rowClick}>
        <Avatar picture={this.props.picture} />
        <div className="media-body">
          <h4>{decode_utf8(this.props.customer)}</h4>
          <p>
            {decode_utf8(this.props.salesman)} &nbsp;
            <span className="label label-info">{this.props.date.substr(0,10)}</span>
          </p>
        </div>
        <hr/>
      </button>

    )
  }
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
export default Row