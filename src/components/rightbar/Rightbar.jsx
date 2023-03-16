import React from 'react'
import "./rightbar.css"
import { Users } from '../../data'
import Online from '../online/Online'
export default function Rightbar({profile}) {
  const HomeRightbar = () =>{
    return(
        <div className='rightbar'>
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img src="assets/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
            </div>
            <img className="rightbarAd" src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-120757.jpg?w=740&t=st=1678242715~exp=1678243315~hmac=17d0d2c3d274082d37463c7742810a0ad7c03735b3229a4320746e617208d553" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u)=>(
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Hyderabad</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Nizamabad</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ruthik Raj</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ruthik Raj</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ruthik Raj</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ruthik Raj</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ruthik Raj</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        
       {profile ? <ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}
