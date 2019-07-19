import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!


class App extends Component {
  constructor(){
    super();
    this.state = {
      ordered : [],
      money : 100
    }
  }

  orderSushi = (sushi) => {
    if (this.state.money >= sushi.price){
      this.setState({
        ordered : [...this.state.ordered,sushi],
        money : this.state.money - sushi.price
      })
    }else{
      window.alert("NOT ENOUGH MONIES COMRADE!")
    }
  }

  addMonies = (amount) => {
    // console.log("Add Monies $", amount)
    this.setState({
      money : this.state.money + Number(amount)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  orderSushi={this.orderSushi} boughtSushi={this.state.ordered}/>
        <Table plateAmount={this.state.ordered} money={this.state.money} addMonies={this.addMonies} />
      </div>
    );
  }
}

export default App;