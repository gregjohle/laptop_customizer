import React from "react";

class FeatureItem extends React.Component {
  render() {
    const { feature } = this.props;
    return (
      <legend className='feature' key={this.props.index}>
        <h3>{feature}</h3>
      </legend>
    );
  }
}

export default FeatureItem;
