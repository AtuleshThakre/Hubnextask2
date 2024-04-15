import React from 'react'

const Button = (props) => {
  return (
    <button className=" btn  btn_box" style={{ fontSize: "22px" }}>
        {props.text}
  </button>
  )
}

export default Button