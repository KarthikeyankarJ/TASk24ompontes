import React from 'react'
import Root from '../base/Root'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate =useNavigate()
  return (
    <Root
    description={"Login"}>
      <div>
    <div className='signin'>
      <input placeholder='Enter your Email' type='text'/>
      <input placeholder='Password' type='password'/>
      <button>Sign-in</button>
    </div>
    <p className='signupnavigate'>Dont have accoount? <span onClick={()=>navigate("/signup")}>Sign-up</span></p>
    </div>
    
    </Root>

  )
}

export default SignIn