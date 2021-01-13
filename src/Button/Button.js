import React from 'react'

function Button(props) {
  return (
    <div>
       <center>
         <button style = {{color : props.color}}>{props.name}</button>
       </center>
    </div>
  )
}

export default Button
