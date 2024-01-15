import React from 'react'

const SocialLink = ({id, href, icon, itemClass}) => {
   
  return (
    <li key={id}>
      {/* <a href={href}  className="nav-icon">  */}
      <a href={href} rel="noreferrer" className={itemClass}> 
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink