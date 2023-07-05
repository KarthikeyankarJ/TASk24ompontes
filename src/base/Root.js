import React from 'react'
import { children  } from 'react'
import { useNavigate } from 'react-router-dom'

function Root({title, description, children}) {
  const navigate = useNavigate()
  return (
    <div className='top-bar'>
      <header>
      <div className='topnav'>
        <div className='left-side' onClick={()=>navigate("/overview")}><span class="material-symbols-outlined">
</span>Overview page</div>
        <div className='center'>IMG</div>
        <div>
        <ul className='right-side'>
          <li onClick={()=>navigate("/home")}>Home</li>
          <li onClick={()=>navigate("/about")}>About</li>
          <li onClick={()=>navigate("/contact")}>Contact</li>
        </ul> 
        </div>
      </div>
      </header>
      <div className='contents'>
          <div className='sidebar'>
      <div className='side-content'>
        <a className='oragin-name'>
          <div onClick={()=>navigate("/company")}>icon</div>
          <div onClick={()=>navigate("/company")}>SB Admin</div>
        </a>
      <div>
      <div className='border-line'></div>
      <div className='dashboad' onClick={()=>navigate("/")}>Dashboad</div>
      <div className='border-line'></div>
      </div>  
      <div>
        <div className='interfacse-main'>Interfase</div>
        <ul className='interfase'>
          <li onClick={()=>navigate("/components")}>Components</li>
          <li onClick={()=>navigate("/Utilities")}>Utilities</li>
        </ul>
      </div>
      <div>
        <div className='addon-main'>ADDON</div>
        <ul className='addon'>
        <li onClick={()=>navigate("/signin")}>Sign-in</li>
          <li onClick={()=>navigate("/page")}>Page</li>

        </ul>
      </div>
      </div>
    </div>
    </div>
    <div className='content'>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div>{children}</div>
      </div>

    </div>
  )
}

export default Root