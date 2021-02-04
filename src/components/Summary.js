import React from "react";

class Summary extends React.Component {
  render() {
    return (
      <div className='summary__option' key={this.props.theKey}>
        <div className='summary__option__label'>{this.props.feature} </div>
        <div className='summary__option__value'>{this.props.selected.name}</div>
        <div className='summary__option__cost'>
          {this.props.money.format(this.props.selected.cost)}
        </div>
      </div>
    );
  }
}

export default Summary;
