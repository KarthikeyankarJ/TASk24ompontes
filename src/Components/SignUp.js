import React from 'react'
import Root from '../base/Root'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  return (
    <Root
    description={"Create Account"}>
      <div>
        <div className='signin'>
        <input placeholder='Enter your Name' type='text'/>
        <input placeholder='Enter your Email' type='text'/>
        <input placeholder='min 8 character' type='password'/>
        <input placeholder='Re-Enter the Password' type='password'/>
        <button>Sign-Up</button>
        <div className='signupnavigate'><span onClick={()=>navigate("/signin")}>Sign-in</span></div>
      </div>



          </div>

    </Root>

  )
}

export default SignUp