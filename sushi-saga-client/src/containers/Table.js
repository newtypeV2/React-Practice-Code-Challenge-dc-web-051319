import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key = {index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const clickHandler = (e) => {

    const dollarAmount = prompt("How much do you want to add to spend?", "Enter amount here");
    if (dollarAmount === null || dollarAmount === "" || dollarAmount.match(/[^0-9]/)) {
      console.log("Invalid Input");
    } else {
      props.addMonies(dollarAmount)
    }
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
        <br></br>
        <button onClick={clickHandler}>Add Monies</button>
      </h1>
      
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.plateAmount)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table