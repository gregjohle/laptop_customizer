import React from "react";
import slugify from "slugify";

class Options extends React.Component {
  render() {
    return (
      <div key={this.props.key} className='feature__item'>
        <input
          type='radio'
          id={this.props.theKey}
          className='feature__option'
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.state}
          onChange={(e) =>
            this.props.updateFeature(this.props.feature, this.props.item)
          }
        />
        <label htmlFor={this.props.key} className='feature__label'>
          {this.props.item.name} (
          {this.props.money.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default Options;
