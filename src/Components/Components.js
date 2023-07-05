import React from 'react'
import Root from '../base/Root'

function Components() {
  return (
    <Root
    title={"This components Navigation"}
    description={"For other document plz navigate through Buttons"}
    >
      <div className='comp-div'>
        <button>search</button>
        <button>Delete</button>
        <button>Add</button>
        
      </div> 
    </Root>
  )
}

export default Components