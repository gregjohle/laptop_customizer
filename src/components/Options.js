import React from "react";
import slugify from "slugify";

class Options extends React.Component {
  render() {
    const { feature } = this.props;
    const { item } = this.props;
    const { doTheUpdate } = this.props;

    return (
      <div key={this.props.key} className='feature__item'>
        <input
          type='radio'
          id={this.props.key}
          className='feature__option'
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.state}
          onChange={(e) => doTheUpdate(feature, item)}
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
