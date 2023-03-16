import React from 'react'
import "./topbar.css"
import { Search ,Person, Chat, Notifications} from '@mui/icons-material'
import {Link} from "react-router-dom"
export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link className='link' to="/"><span className='logo'>Konekte</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <Search className='searchIcon'/> 
            <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
            <span className="topbarLink"><Link className='link' to={"/"}>Homepage</Link></span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className='topbariconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className='topbariconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className='topbariconBadge'>1</span>
            </div>
        </div>
         <Link to={"/profile"}><img src="/assets/person/1.png" alt="" className="topbarImg" /></Link>
         
      </div>
      
    </div>
  )
}
