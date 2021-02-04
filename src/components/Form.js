import React from "react";
import slugify from "slugify";
import Item from "./Item";
import Options from "./Options";

// eslint-disable-next-line react/require-render-return
class MainForm extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Options
            key={itemHash}
            feature={feature}
            state={this.props.state.selected[feature].name}
            doTheUpdate={this.props.handleUpdate}
            item={item}
            money={this.props.money}
          />
        );
      });

      return (
        <fieldset className='feature' key={featureHash}>
          <Item key={featureHash} feature={feature} />
          {options}
        </fieldset>
      );
    });
    return <div>{features}</div>;
  }
}

export default MainForm;
