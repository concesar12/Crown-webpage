import React from 'react';
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";
//withRouter gave us access to history
//We are going to put (match) to know where in our directory is located
function MenuItem({title, imageUrl, size, history, linkUrl, match}) {
  return (
    <div className={`${size} menu-item`} onClick={() =>{
      history.push(`${match.url}${linkUrl}`) //We are joining the two addresses ex. hompage(match)/shop/hats(linkUrl)
    }}>
      <div className="background-image" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
//withRouter is going to give us acces to the history,
//We need history to get access to location, match and history
//withrouter is going to conver this component into a super component 
export default withRouter(MenuItem);
