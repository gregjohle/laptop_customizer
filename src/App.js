import React from "react";
import "./App.css";
import Form from "./components/Form";
import MainSummary from "./components/MainSummary";
import Total from "./components/Total";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends React.Component {
  constructor(props) {
    super(props);
    /*this.updateFeature = this.updateFeature.bind(this);*/
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700,
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200,
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98,
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    };
  }

  updateFeature = (feature, newValue) => {
    console.log("working");
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className='App'>
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form
            state={this.state}
            features={this.props.features}
            updateFeature={this.updateFeature}
            money={USCurrencyFormat}
          />
          <section className='main__summary'>
            <h2>Your cart</h2>
            <MainSummary state={this.state} money={USCurrencyFormat} />
            <Total state={this.state} money={USCurrencyFormat} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
