import React from "react";
import Summary from "./Summary";

class MainSummary extends React.Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.state.selected[feature];

        return (
          <>
            <Summary
              feature={feature}
              theKey={featureHash}
              money={this.props.money}
              selected={selectedOption}
            />
          </>
        );
      }
    );

    return <div>{summary}</div>;
  }
}

export default MainSummary;
