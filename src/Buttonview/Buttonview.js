import React from 'react'
import Button from '../Button/Button'

function Buttonview() {
  return (
    <div>
      <Button name = 'send' color = 'red'/>
      <Button name = 'enter' color = 'green'/>
      <Button name = 'cancel' color = 'yellow'/>
    </div>
  )
}

export default Buttonview
