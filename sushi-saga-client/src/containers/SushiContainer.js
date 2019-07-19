import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const API = "http://localhost:3000/sushis"

// const SushiContainer = (props) => {
//   return (
//     <Fragment>
//       <div className="belt">
//         {
//           /* 
//              Render Sushi components here!
//           */
//         }
//         <MoreButton />
//       </div>
//     </Fragment>
//   )
// }

// export default SushiContainer

export default class SushiContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSushi : [],
      allSushi : [],
      sushiIndex : 4
    }
  }
  
    componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(sushis => {
          let firstFour = sushis.slice(0,4)
          this.setState({
            allSushi : sushis,
            currentSushi : firstFour
          })
        })
    }

    moreSushiHandler = () => {
      let newIndex;
      if (this.state.sushiIndex===100){
        newIndex = 4;
      }else{
        newIndex = this.state.sushiIndex + 4
      }
      this.setState({
        currentSushi : this.state.allSushi.slice(newIndex-4,newIndex),
        sushiIndex : newIndex
      })
    }

    getCurrentSushi = () => {
      return this.state.currentSushi.map( sushiObj => <Sushi key={sushiObj.id} sushiData={sushiObj} exist={this.props.boughtSushi.includes(sushiObj)} orderSushi={this.props.orderSushi}/>)
    }

    render(){
      return(
            <Fragment>
              <div className="belt">
                {this.getCurrentSushi()}
                <MoreButton moreSushiHandler={this.moreSushiHandler}/>
              </div>
            </Fragment>
      )
    }
  }