import React from 'react';
import './Instagram.scss'

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logo">
        <a href="#">
          <img className="instagramTextLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="" />
        </a>
      </div>

      <ul id="leftMiddle">
        <li id="home" className="middleMenu">
          <i className="fa-solid fa-house"></i>
          <b>Home</b>
        </li>
        <li id="search" className="middleMenu">
          <i className="fa-solid fa-magnifying-glass"></i>
          Search
        </li>
        <li id="discover" className="middleMenu">
          <i className="fa-regular fa-compass"></i>
          Explore
        </li>
        <li id="reels" className="middleMenu">
          <i className="fa-solid fa-clapperboard"></i>
          Reels
        </li>
        <li id="messages" className="middleMenu">
          <i className="fa-brands fa-facebook-messenger"></i>
          Messages
        </li>
        <li id="notifications" className="middleMenu">
          <i className="fa-regular fa-heart"></i>
          Notifications
        </li>
        <li id="create" className="middleMenu">
          <i className="fa-regular fa-square-plus"></i>
          Create
        </li>
        <li id="profile" className="middleMenu">
          <i className="fa-regular fa-user"></i>
          Profile
        </li>
        <li id="threads" className="bottomMenu">
          <i className="fa-brands fa-threads"></i>
          Threads
        </li>
        <li id="more" className="bottomMenu">
          <i className="fa-solid fa-bars"></i>
          More
        </li>
      </ul>
    </div>
  );
};

const Story = () => {
  return (
    <div className="story">
      <ul className="storyArea">
        <li style={{ background: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg) center/cover' }} className="stories">
          <p>user1</p>
        </li>
        <li style={{ background: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg) center/cover' }} className="stories">
          <p>user2</p>
        </li>
      </ul>
    </div>
  );
};

const Post1 = () => {
  return (
    <div className="post1">
      <div style={{ background: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg) center/cover' }} className="postPP"></div>
      <p className="postID"><b>user1</b></p>
      <div className="dots">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <img className="firstPost" src="https://i0.wp.com/cdn.statically.io/img/bellawilde.com/f=auto%2Cq=40/wp-content/uploads/2022/04/utah-bonneville-salt-flats-reflection.jpg?resize=683%2C1024&ssl=1" alt="post1" />
      <ul className="reactions">
        <li><i className="fa-regular fa-heart"></i></li>
        <li><i className="fa-regular fa-comment"></i></li>
        <li><i className="fa-regular fa-paper-plane"></i></li>
        <li className="save"><i className="fa-regular fa-bookmark"></i></li>
      </ul>
      <p className="like" style={{ padding: '0.3rem', fontSize: '0.9rem' }}><b>0.000 likes</b></p>
      <p style={{ padding: '0.3rem', fontSize: '0.9rem' }}><b style={{ cursor: 'pointer' }}>user1</b> &nbsp; Lorem ipsum dolor sit amet.</p>
      <p style={{ padding: '0.3rem', fontSize: '0.9rem', cursor: 'pointer' }} className="comment">View all 5 comments</p>
      <p style={{ padding: '0.3rem', fontSize: '0.9rem', cursor: 'pointer' }} className="addComment">Add a comment...</p>
    </div>
  );
};


const RightPanel = () => {
  return (
    <div className="rightPanel">
      <ul className="suggestions">
        <li style={{ background: 'url(https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg) center/cover' }} className="sugProfile">
          <p className="sugUser">user</p>
          <p className="sugFollow">Switch</p>
        </li>
        {/* Add more suggested user items as needed */}
        <p className="sugText" style={{ color: 'rgb(123, 123, 123)', fontWeight: 'bold', position: 'absolute', margin: '1.1rem 0 0 0.5rem', fontSize: '0.9rem' }}>Suggested for you</p>
        <p className="sugSeeAll" style={{ color: 'rgb(123, 123, 123)', fontWeight: 'bold', position: 'absolute', margin: '1.2rem 0 0 0.5rem', right: '0.7rem', fontSize: '0.8rem', cursor: 'pointer' }}>See All</p>
      </ul>
    </div>
  );
};

const MobileLeftMenu = () => {
  return (
    <div className="mobileLeftMenu">
      <div className="mLogo">
        <a href="#">
          <img className="minstagramLogo" src="https://i.pinimg.com/originals/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.png" alt="" />
        </a>
      </div>

      <ul className="mLeftMenu">
        <li id="mhome" className="mobileBtns">
          <i className="fa-solid fa-house"></i>
        </li>
        <li id="msearch" className="mobileBtns">
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li id="mdiscover" className="mobileBtns">
          <i className="fa-regular fa-compass"></i>
        </li>
        <li id="mreels" className="mobileBtns">
          <i className="fa-solid fa-clapperboard"></i>
        </li>
        <li id="mmessages" className="mobileBtns">
          <i className="fa-brands fa-facebook-messenger"></i>
        </li>
        <li id="mnotifications" className="mobileBtns">
          <i className="fa-regular fa-heart"></i>
        </li>
        <li id="mcreate" className="mobileBtns">
          <i className="fa-regular fa-square-plus"></i>
        </li>
        <li id="mprofile" className="mobileBtns">
          <i className="fa-regular fa-user"></i>
        </li>
        <li id="mbars" className="mbottomMenu">
          <i className="fa-solid fa-bars"></i>
        </li>
      </ul>
    </div>
  );
};

const MobileHeader = () => {
  return (
    <div className="mobileHeader">
      <img className="mobileTextLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="" />
      <input type="text" placeholder="&#xF002; Search" style={{ fontFamily: 'Arial, FontAwesome' }} />
      <i className="fa-regular fa-heart"></i>
    </div>
  );
};

const MobileBottomMenu = () => {
  return (
    <div className="mBottomBtns">
      <ul className="bottomBtns">
        <li className="bBtns">
          <i className="fa-solid fa-house"></i>
        </li>
        <li className="bBtns">
          <i className="fa-regular fa-compass"></i>
        </li>
        <li className="bBtns">
          <i className="fa-solid fa-clapperboard"></i>
        </li>
        <li className="bBtns">
          <i className="fa-regular fa-square-plus"></i>
        </li>
        <li className="bBtns">
          <i className="fa-brands fa-facebook-messenger"></i>
        </li>
        <li className="bBtns">
          <i className="fa-regular fa-user"></i>
        </li>
      </ul>
    </div>
  );
};

export default function Instagram() {
  return (
    <div>
      <LeftMenu />
      <Story />
      <Post1 />
      <RightPanel />
      <MobileLeftMenu />
      <MobileHeader />
      <MobileBottomMenu />
    </div>
  );
}
