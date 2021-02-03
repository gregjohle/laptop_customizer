import React from "react";

class FeatureItem extends React.Component {
  render() {
    const { key } = this.props;
    const { feature } = this.props;
    return (
      <legend className='feature' key={key}>
        <h3>{feature}</h3>
      </legend>
    );
  }
}

export default FeatureItem;
