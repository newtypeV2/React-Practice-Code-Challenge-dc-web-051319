import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.exist ?
            null
          :
            <img src={props.sushiData.img_url} alt={props.sushiData.name} onClick={()=> props.orderSushi(props.sushiData)} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiData.name} - ${props.sushiData.price}
      </h4>
    </div>
  )
}

export default Sushi