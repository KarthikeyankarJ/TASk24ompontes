import React from 'react'
import Root from '../base/Root'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Dashboad() {
  return (
    <Root
    title={"Dashboad Components"}
    >
        <nav className='dash-nav'>
        <div>          
          <button>
          <span class="material-symbols-outlined">
          menu
          </span>
          </button></div>
          <div className='inputdash'><input placeholder='search for...'/></div>
          <button><SearchIcon/></button>
          <div><button className='notification'><CircleNotificationsIcon/></button>
          </div>
        </nav>
        <div className='boxes'>
        <div className='contaner-earnings'>
          <div className='earningbox'>
              <div className='earning'>
                <div className='earning-title'>Monthly Earning</div>
                <div className='earning'>400000</div>
                </div>
              <div>
                Calender
              </div>
          </div>
        </div>
        <div className='contaner-earnings2'>
          <div className='earningbox'>
              <div className='earning'>
                <div className='earning-title2'>
                  Earning(ANNUAL)</div>
                <div className='earning2'>400000</div>
                </div>
              <div>
                Calender
              </div>
          </div>
        </div>
        </div>
    </Root>
  )
}

export default Dashboad